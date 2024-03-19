<template>
  <q-page class="flex column q-ml-xl">
    <h2 id="sass">Sass</h2>
    <p>
      Utilize our source Sass files to take advantage of variables, maps,
      mixins, and functions to help you build faster and customize your project.
    </p>
    <h2 id="file-structure">File structure</h2>
    <p>
      Whenever possible, avoid modifying Bootstrap’s core files. For Sass, that
      means creating your own stylesheet that imports Bootstrap so you can
      modify and extend it. Assuming you’re using a package manager like npm,
      you’ll have a file structure that looks like this:
    </p>
    <p>If you’ve downloaded our source files and aren’t using a package manager, you’ll want to manually create something similar to that structure, keeping Bootstrap’s source files separate from your own.</p>
    <h2 id="importing">Importing</h2>
    <p>In your custom.scss, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.</p>
    <p>With that setup in place, you can begin to modify any of the Sass variables and maps in your custom.scss. You can also start to add parts of Bootstrap under the // Optional section as needed. We suggest using the full import stack from our bootstrap.scss file as your starting point.</p>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "page-1-2",
});
</script>
