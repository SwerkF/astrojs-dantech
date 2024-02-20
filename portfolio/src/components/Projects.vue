<script setup lang="ts">

import { ref, computed } from 'vue';

const currentPage = ref(1); // Make currentPage reactive

const pageSize = 3; // Number of projects per page

const projects = [{
    name:"Projet 1",
    description:"Description du projet 1",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},{
    name:"Projet 2",
    description:"Description du projet 2",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},{
    name:"Projet 3",
    description:"Description du projet 3",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 4",
    description:"Description du projet 4",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 5",
    description:"Description du projet 5",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 6",
    description:"Description du projet 6",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 7",
    description:"Description du projet 7",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 8",
    description:"Description du projet 8",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 9",
    description:"Description du projet 9",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
},
{
    name:"Projet 10",
    description:"Description du projet 10",
    languages:["HTML","CSS","JS"],
    image:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
}

]

const handlePagination = (page: number) => {
    currentPage.value = page;
}

const paginatedProjects = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return projects.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(projects.length / pageSize));

</script>

<template>
    <div class="relative overflow-hidden z-10">
        <div class="flex justify-center flex-col">
            <div class="hero min-h-screen">
                <div class="hero-content text-center">
                    <div class="max-w-7xl">
                        <h2 class="lg:text-6xl text-3xl font-bold mb-4">PROJECTS</h2>
                        <div class="flex justify-center flex-row flex-wrap gap-5">
                            <div v-for="(project, index) in paginatedProjects" :key="index" class="card max-w-sm bg-base-100 shadow-xl">
                                <figure>
                                    <img :src="project.image" alt="image" class="rounded-t-lg" />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        {{project.name}}
                                        
                                            <div v-for="(lang, index) in project.languages" :key="index" class="badge badge-outline">{{lang}}</div>
                                    </h2>
                                    <p>{{project.description}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="join mt-5">
                            <div class="join mt-5">
                                <button v-for="page in totalPages" :key="page" @click="handlePagination(page)" class="join-item btn btn-sm" :class="{ 'btn-active': currentPage === page }">{{ page }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>