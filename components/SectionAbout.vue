<template>
  <section id="about" v-if="data">
    <div class="container about-grid">
      <div class="about-photo">
        <img :src="data.photo" alt="Anya Gordeladze" />
      </div>
      <div class="about-text">
        <h1>Anya Gordeladze</h1>
        <p class="subtitle">{{ data.subtitle }}</p>
        <div class="about-body">
          <ContentRenderer :value="data" />
        </div>
        <div class="about-social">
          <SocialIcons />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('about', () =>
  queryContent('about').findOne()
)
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 64px;
  align-items: start;
}

.about-photo img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius);
  filter: grayscale(15%);
}

.about-text {
  padding-top: 16px;
}

h1 {
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  margin-bottom: 32px;
}

.about-body {
  font-size: 1rem;
  color: var(--text);
  line-height: 1.8;
  opacity: 0.85;
}

.about-body :deep(p) {
  margin-bottom: 16px;
}

.about-social {
  margin-top: 24px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-photo img {
    max-width: 320px;
  }

  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about-photo img {
    max-width: 100%;
  }

  h1 {
    font-size: 1.75rem;
  }
}
</style>
