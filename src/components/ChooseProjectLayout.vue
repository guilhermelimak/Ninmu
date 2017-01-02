<template>
<el-row type="flex" justify="center">
  <el-col :sm="18" :xs="18" :md="4">
    <div class="project__list">
      <div class="project__item" v-for="project in projects">
        {{ project.name }}
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { name: 'Green' },
        { name: 'High' },
        { name: 'iaaa' },
      ],
    }
  },
}
</script>

<style lang="sass">
.project
  &__list
    border: 1px solid #ccc;
    margin-top: 150px;
    box-shadow: 0px 6px 18px -4px rgba(0,0,0,0.25);


  &__item
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ccc;
    cursor: pointer;

    &:first-child
      border-top: none;

    &:hover
      background-color: #EEE;
      border: 1px solid #EEE;
</style>
