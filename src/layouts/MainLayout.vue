<template>
  <q-layout view="hHh Lpr lff">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Title</q-toolbar-title>
        <q-space />
        <div class="SearchBox q-mr-xl q-pt-sm q-pb-sm">
          <q-input
            dark
            dense
            standout
            v-model="searchQuery"
            input-class="text-right"
            class="q-ml-md searchInput"
            @update:model-value="updateSearch"
            placeholder="Buscar..."
          >
            <template v-slot:append>
              <q-icon v-if="searchQuery === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="clearSearch"
              />
            </template>
          </q-input>
          <q-list
            v-if="showSuggestions"
            bordered
            separator
            class="SuggestionList"
          >
            <q-item
              clickable
              v-for="(result, index) in results"
              :key="index"
              class="Suggestion"
              :class="{ selected: selectedSuggestionIndex === index }"
              @click="selectResult(result)"
              style="display: flex; flex-direction: column"
            >
              <q-item-section>{{ result.title }}</q-item-section>
              <q-item-section style="font-size: 12px; color: grey">{{
                result.url
              }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered persistent>
      <q-list class="q-mt-lg">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-pb-xl" style="max-width: 1080px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import EssentialLink from "components/EssentialLink.vue";
import indexDB from "assets/indexDB.json";
import MiniSearch from "minisearch";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Introduction",
    caption: "Descripción de inicio",
    icon: "home",
    link: "home",
    active: true,
  },
  {
    title: "Customize",
    caption: "Descripción de clasificación 1",
    icon: "description",
    link: "page-1",
    children: [
      {
        icon: "settings",
        title: "Overview",
        caption: "Ajustes de la aplicación",
        link: "page-1-1",
      },
      {
        icon: "settings",
        title: "Sass",
        caption: "Ajustes de la aplicación",
        link: "page-1-2",
      },
    ],
  },
  {
    title: "Layout",
    caption: "Descripción de clasificación 2",
    icon: "code",
    link: "page-2",
    children: [
      {
        icon: "settings",
        title: "Breakpoints",
        caption: "Ajustes de la aplicación",
        link: "page-2-1",
      },
      {
        icon: "settings",
        title: "Containers",
        caption: "Ajustes de la aplicación",
        link: "page-2-2",
      },
      {
        icon: "settings",
        title: "Grid",
        caption: "Ajustes de la aplicación",
        link: "page-2-3",
      },
    ],
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const router = useRouter();
const searchQuery = ref("");
const results = ref([]);
const suggestions = ref([]);
const showSuggestions = ref(false);
const loading = ref(true);
const selectedSuggestionIndex = ref(-1);
const miniSearch = new MiniSearch({
  fields: ["title", "description", "url"],
});
const searchOptions = {
  fuzzy: 0.2,
  prefix: true,
  fields: ["title", "description", "url"],
  combineWith: "OR",
  filter: null,
};
let contentById = {};

onMounted(async () => {
  const allContent = indexDB;
  contentById = allContent.reduce((byId, item) => {
    byId[item.id] = item;
    return byId;
  }, {});
  await miniSearch.addAll(allContent);
  loading.value = false;
});

const updateSearch = () => {
  if (searchQuery.value.length > 1) {
    results.value = getSearchResults(searchQuery.value);
    suggestions.value = getSuggestions(searchQuery.value);
    if (suggestions.value.length > 0) {
      showSuggestions.value = true;
    }
  } else {
    results.value = [];
    suggestions.value = [];
    showSuggestions.value = false;
  }
};

const clearSearch = () => {
  searchQuery.value = "";
  results.value = [];
  suggestions.value = [];
};

const selectSuggestion = (suggestion) => {
  searchQuery.value = suggestion;
  results.value = getSearchResults(suggestion);
  results.value = miniSearch.search(suggestion, searchOptions);
  console.log("clicked " + results.value);
};

const selectResult = (result) => {
  clearSearch();
  router.push("/" + result.url);
};

const getSearchResults = (query) => {
  const searchOptions = getSearchOptions();
  return miniSearch
    .search(query, searchOptions)
    .map(({ id }) => contentById[id]);
};

const getSuggestions = (query) => {
  return miniSearch
    .autoSuggest(query, { boost: { title: 5 } })
    .filter(({ suggestion, score }, _, [first]) => score > first.score / 4)
    .slice(0, 5);
};

const getSearchOptions = () => {
  const searchOptions = {};
  searchOptions.fuzzy = 0.2;
  return searchOptions;
};
</script>

<style scoped>
.SearchBox {
  display: flex;
  flex-direction: column;
  position: relative;
}
.SuggestionList {
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.93);
  z-index: 20;
  color: black;
  position: absolute;
  top: 49px;
  left: 15px;
  width: 94%;
}
.searchInput {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
