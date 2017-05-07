<template>
  <li class="timeline-node">
    <div class="timeline-stamp">{{ createdOn }}</div>
    <div class="timeline-name">
      <a href="/project/project_name">{{ project.name }}</a>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      createdOn () {
        if (this.project.date) {
          return new Date(this.project.date).toLocaleDateString('pl-PL')
        }
        return ''
      }
    }
  }
</script>
