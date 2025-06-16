<template>
    <div class="loader">
        <div class="circle outer-circle"></div>
        <div class="circle inner-circle"></div>
    </div>

</template>
<style scoped>
.loader {
    position: relative;
    width: 100px;
    height: 100px;
}

.circle {
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    animation: pulse 2s infinite;
}

.inner-circle {
    background-color: #eae723;
    animation-delay: 0.5s;
}

.outer-circle {
    background-color: #38b652;
}

@keyframes pulse {
    0% {
        transform: scale(0);
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>