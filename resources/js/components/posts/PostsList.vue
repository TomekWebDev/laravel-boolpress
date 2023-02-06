<template>
  <div class="">
    <!-- LOADER -->
    <LoaderComp v-if="isLoading" />

    <ul v-else-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <div class="card w-25 m-1">
          <img :src="'/storage/' + post.cover" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Post title: {{ post.title }}</h4>

            <p class="card-text">Post body: {{ post.body }}</p>

            <h6 v-if="post.category" class="">{{ post.category.name }}</h6>

            <h6 v-for="tag in post.tags" :key="tag" class="">
              {{ tag.name }}
            </h6>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>Non ci sono post nel db</p>

    <PaginationComp @on-page-change="getPosts" :pagination="pagination" />
  </div>
</template>

<script>
import LoaderComp from "../LoaderComp.vue";
import PaginationComp from "../PaginationComp.vue";

export default {
  name: "PostsList",

  data() {
    return {
      posts: [],
      isLoading: false,
      pagination: {},
    };
  },

  //   props: ["posts", "isLoading", "pagination"],

  components: {
    LoaderComp,
    PaginationComp,
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    getPosts(page) {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts?page=" + page)
        .then((res) => {
          console.log(res.data);
          // this.posts = res.data.data;
          const { data, current_page, last_page } = res.data;
          this.posts = data;
          this.pagination = {
            lastPage: last_page,
            currentPage: current_page,
          };
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

.card {
  max-width: 25%;
  margin: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}

.card h6 {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
  margin-top: 0.5rem;
  margin-bottom: 0;
}
</style>