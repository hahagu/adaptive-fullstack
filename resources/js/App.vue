<template>
  <router-view></router-view>
</template>

<script>
export default {
    metaInfo() {
        return {
            link: [
                {
                    rel: "stylesheet",
                    href: `./styles/themes/${this.$root.selectedTheme}.css`,
                    body: true
                }
            ],
            title: this.$root.appName,
            titleTemplate: `%s - ${this.$route.meta.title}`
        };
    }
};
</script>