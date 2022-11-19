<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="w-full flex justify-center">
                <div class="cursor-pointer">
                    <file-upload
                        class="!overflow-visible"
                        @input-file="inputFile"
                        @input-filter="inputFilter"
                    >
                        <ion-avatar class="h-24 w-24 shadow-md border-2 border-primary relative cursor-pointer">
                            <img :src="profilePictureUrl" alt="Profile Picture" class="object-cover h-full w-full">
                            <ion-icon class="absolute bottom-0 right-0 text-primary text-sm bg-light border-2 border-primary rounded-full p-1"
                                      src="assets/icon/pencil-outline.svg"></ion-icon>
                        </ion-avatar>
                    </file-upload>
                </div>
            </div>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Pseudo</ion-label>
                <ion-input autocomplete="nickname" type="text" v-model="name"></ion-input>
            </ion-item>
            <ion-item class="w-full my-4 rounded-t-xl shadow-md">
                <ion-label position="stacked">Email</ion-label>
                <ion-input inputmode="email" autocomplete="email" type="email" v-model="email"></ion-input>
            </ion-item>
            <div class="w-full flex justify-center">
                <ion-button shape="round" @click="update">Enregistrer</ion-button>
            </div>
            <div class="w-full flex justify-center">
                <ion-button color="danger" fill="outline" shape="round" @click="logout">Se déconnecter</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonItem, IonInput, IonLabel, IonIcon, IonAvatar, IonButton } from '@ionic/vue';
import VueUploadComponent from 'vue-upload-component'
import { useRouter } from "vue-router";


export default defineComponent({
    name: 'SettingsPage',
    components: {
        IonContent,
        IonPage,
        IonItem,
        IonButton,
        IonInput,
        IonLabel,
        IonIcon,
        IonAvatar,
        FileUpload: VueUploadComponent
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    computed: {
        profilePictureUrl: {
            get() {
                return this.$store.state.user.profile_picture ?? 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
            },
            set(newFile) {
                this.$store.commit({
                    type: 'setUserValue',
                    columnName: 'profile_picture',
                    columnValue: newFile,
                })
            }
        },
        email: {
            get() {
                return this.$store.state.user.email;
            },
            set(newValue) {
                this.$store.commit({
                    type: 'setUserValue',
                    columnName: 'email',
                    columnValue: newValue,
                })
            }
        },
        name: {
            get() {
                return this.$store.state.user.name;
            },
            set(newValue) {
                this.$store.commit({
                    type: 'setUserValue',
                    columnName: 'name',
                    columnValue: newValue,
                })
            }
        },
    },
    methods: {
        inputFilter: function (newFile, oldFile, prevent) {
            if (newFile && !oldFile) {
                // Filter non-image file
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    return prevent()
                }
            }

            // Create a blob field
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
                this.profilePictureUrl = newFile.blob;
            }
        },
        inputFile: function (newFile) {
            if (newFile) {
                let data = new FormData();
                data.append('profile_picture', newFile.file);
                this.axios.post('/user/profile-picture', data)
                    .then(response => {
                        const profilePicture = response.data.profile_picture;
                        if (profilePicture) {
                            this.profilePictureUrl = profilePicture;
                        }
                    })
            }
        },
        update() {
            this.axios.post('/user', {
                email: this.email,
                name: this.name
            })
                .then(response => {
                    this.email = response.data.user.email;
                    this.name = response.data.user.name;
                })
        },
        logout() {
            this.axios.post('/logout')
                .then(() => {
                    this.$store.commit('logout');
                    this.router.push('/')
                })
        }
    }
});
</script>
