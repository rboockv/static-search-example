<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Título
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list class="q-mt-lg">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Inicio',
    caption: 'Descripción de inicio',
    icon: 'home',
    link: 'home',
    active: true
  },
  {
    title: 'Clasificación 1',
    caption: 'Descripción de clasificación 1',
    icon: 'description',
    link: 'page-1',
    children: [
      { icon: 'settings', title: 'Clasificación 1.1', caption: 'Ajustes de la aplicación', link: 'page-1-1' },
      { icon: 'settings', title: 'Clasificación 1.2', caption: 'Ajustes de la aplicación', link: 'page-1-2' }
    ]
  },
  {
    title: 'Clasificación 2',
    caption: 'Descripción de clasificación 2',
    icon: 'code',
    link: 'page-2',
    children: [
      { icon: 'settings', title: 'Clasificación 2.1', caption: 'Ajustes de la aplicación', link: 'page-2-1' },
      { icon: 'settings', title: 'Clasificación 2.2', caption: 'Ajustes de la aplicación', link: 'page-2-2' },
      { icon: 'settings', title: 'Clasificación 2.3', caption: 'Ajustes de la aplicación', link: 'page-2-3' }
    ]
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
