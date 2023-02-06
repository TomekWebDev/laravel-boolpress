<template>
  <div>
    <h1>Page named posts</h1>
    <PostsList />
  </div>
</template>

<script>
import PostsList from "../../posts/PostsList.vue";

export default {
  name: "PostsPageComp",
  components: {
    PostsList,
  },
};
</script> 

<style lang="scss" scoped>
</style>