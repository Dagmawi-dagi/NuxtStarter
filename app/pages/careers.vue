<script setup lang="js">
import { Heart, Globe, Users, Briefcase, MapPin } from "lucide-vue-next";
import { JOBS } from "@/assets/constants"; // keep same path or tell me to convert it to Nuxt composable

</script>

<template>
  <div class="animate-in fade-in duration-500 min-h-screen bg-stone-50">

    <!-- Hero -->
    <div class="bg-stone-900 text-white py-24 text-center pt-40">
      <h1 class="text-5xl font-serif mb-4">Careers at Lumina</h1>
      <p class="text-stone-400 max-w-xl mx-auto px-6">
        Join a legacy of excellence. Create memories that last a lifetime.
      </p>
    </div>

    <!-- Values Section -->
    <div class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <h2 class="text-3xl font-serif text-stone-900 mb-4">
            Why Work With Us?
          </h2>
          <p class="text-stone-500 max-w-2xl mx-auto">
            We believe that our staff is our most valuable asset. We offer
            competitive benefits, world-class training, and the opportunity to
            live in one of the world's most beautiful locations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Card 1 -->
          <div class="p-6 border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Heart :size="28" />
            </div>
            <h3 class="font-serif text-xl mb-3">Holistic Wellbeing</h3>
            <p class="text-stone-500 text-sm leading-relaxed">
              Comprehensive health insurance, spa access, and nutritious staff
              meals prepared by our culinary team.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="p-6 border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Globe :size="28" />
            </div>
            <h3 class="font-serif text-xl mb-3">Global Community</h3>
            <p class="text-stone-500 text-sm leading-relaxed">
              Work with a diverse team from over 20 nations. We offer language
              courses and cross-training opportunities.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="p-6 border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="bg-gold-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
              <Users :size="28" />
            </div>
            <h3 class="font-serif text-xl mb-3">Career Growth</h3>
            <p class="text-stone-500 text-sm leading-relaxed">
              We promote from within. Many of our managers started as interns.
              Your journey is ours to nurture.
            </p>
          </div>

        </div>
      </div>
    </div>

    <!-- Vacancy List -->
    <div class="max-w-4xl mx-auto px-6 py-24">

      <div class="text-center mb-12">
        <h3 class="text-gold-600 uppercase tracking-widest text-sm font-bold mb-3">
          Current Openings
        </h3>
        <h2 class="text-4xl font-serif text-stone-900">Find Your Role</h2>
      </div>

      <div class="grid gap-6">

        <!-- Job List -->
        <div
          v-for="job in JOBS"
          :key="job.id"
          class="bg-white p-8 shadow-sm border-l-4 border-gold-600 hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start gap-6"
        >

          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <h4 class="text-2xl font-serif text-stone-900">{{ job.title }}</h4>
              <span
                class="bg-stone-100 text-stone-600 text-xs px-2 py-1 uppercase tracking-wide rounded-sm font-bold"
              >
                {{ job.type }}
              </span>
            </div>

            <p class="text-stone-500 mb-6 leading-relaxed max-w-2xl">
              {{ job.description }}
            </p>

            <div class="flex gap-6 text-xs font-bold text-stone-400 uppercase tracking-wider">
              <span class="flex items-center gap-1.5">
                <Briefcase :size="14" /> {{ job.department }}
              </span>
              <span class="flex items-center gap-1.5">
                <MapPin :size="14" /> {{ job.location }}
              </span>
            </div>
          </div>

          <div class="w-full md:w-auto flex flex-col gap-3">
            <button
              @click="() => window.location.href = `mailto:hr@luminagrand.com?subject=Application for ${job.title}`"
              class="bg-stone-900 text-white px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-gold-600 transition-colors whitespace-nowrap text-center"
            >
              Apply Now
            </button>
            <span class="text-[10px] text-stone-400 text-center">
              Ref: {{ job.id }}
            </span>
          </div>

        </div>

        <!-- No JOBS -->
        <div v-if="JOBS.length === 0" class="text-center bg-white p-12 shadow-sm">
          <p class="text-stone-500 mb-4">
            There are currently no open positions.
          </p>
          <p class="text-sm text-stone-400">
            Feel free to send a spontaneous application to hr@luminagrand.com
          </p>
        </div>

      </div>

    </div>

  </div>
</template>
