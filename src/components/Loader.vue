<template>
    <div class="spinner-grow text-gray-500" role="status" aria-hidden="true">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<style>
.spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -.125em;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: .75s linear infinite spinner-grow;
    animation: .75s linear infinite spinner-grow;
}

@keyframes spinner-grow {
    0% {
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
    }
}

.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0,0,0,0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}
</style>
