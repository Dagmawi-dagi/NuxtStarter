<script>

</script>


<template>
    <NavigationsTopnav2 v-if="$route.meta.nav === undefined || $route.meta.nav" />
    <div style="min-height: 80vh;">
        <slot/>
    </div>
    <Footer v-if="$route.meta.footer === undefined || $route.meta.footer"/>
</template>

