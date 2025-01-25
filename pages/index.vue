<template>
  <div>
    <h1 style="text-align: center; font-family: sans-serif; font-size: 40px">
      Home page
    </h1>
    <ul>
      <h2 style="font-family: sans-serif">Users</h2>
      <li v-for="user in users" :key="user.id">{{ user.username }}</li>
    </ul>
  </div>
</template>

<script setup>
const users = ref([]);

onMounted(async () => {
  try {
    const response = await $fetch("/api/user", { method: "GET" });
    users.value = response.users;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style></style>
