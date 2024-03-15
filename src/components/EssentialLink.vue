<template>
  <div>
    <q-expansion-item
      group="somegroup"
      expand-separator
      :icon="props.icon"
      :label="props.title"
      @click="navigateTo(link)"
      :expand-icon="expandableItem(props.children.length)"
      :class="isActive(props.link)"
    >
     <template v-slot:header v-if="props.children.length === 0" >
        <q-item-section v-if="props.icon" avatar>
          <q-icon :name="props.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ props.title }}</q-item-label>
        </q-item-section>
    </template>
      <q-item v-if="props.children.length > 0" class="defaultWhite">
        <q-list>
          <q-item
            v-for="(child, childIndex) in props.children"
            :key="`child-${childIndex}`"
            clickable
            tag="a"
            @click="navigateTo(child.link)"
            :class="isActive(child.link)"
          >
            <q-item-section v-if="child.icon" avatar>
              <q-icon :name="child.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ child.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item>
    </q-expansion-item>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue'

defineOptions({
  name: 'EssentialLink'
})

const router = useRouter();
const route = useRoute();
const currentPath = ref(route.path);

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  },

  children: {
    type: Object,
    default: []
  },

  active: {
    type: Boolean,
    default: false
  },
});

watch(route, () => {
 currentPath.value = route.name;
});

const navigateTo = (link) => {
  router.push({ name: link });
};

const expandableItem = (length) => {if(length === 0) return 'none'};

const isActive = (link) => {
  currentPath.value === '/' ? currentPath.value ='home' : '';
  if (currentPath.value === link) {
    return 'my-menu-link';
  }
  return '';
};
</script>

<style lang="sass">
.my-menu-link
  color: #1976D2
  border-right: 4px solid #1976D2

.defaultWhite
  color: black
  background: white
</style>
