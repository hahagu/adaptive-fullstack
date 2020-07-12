<template>
  <router-view />
</template>

<script>
export default {
  metaInfo() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: `./styles/themes/${this.$root.selectedTheme}.css`
        }
      ],
      title: this.$root.appName,
      titleTemplate: `%s - ${this.$route.meta.title}`
    };
  }
};
</script>