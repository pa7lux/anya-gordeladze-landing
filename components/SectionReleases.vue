<template>
  <section id="releases" v-if="data && data.length">
    <div class="container">
      <h2 class="section-title">Releases</h2>
      <div class="releases-list">
        <article v-for="release in data" :key="release._path" class="release-card">
          <div class="release-cover">
            <img :src="release.cover" :alt="release.title" />
          </div>
          <div class="release-info">
            <h3 class="release-title">{{ release.title }}</h3>
            <div class="release-body">
              <ContentRenderer :value="release" />
            </div>
            <div v-if="release.links?.length" class="release-links">
              <a
                v-for="link in release.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="release-link"
              >
                {{ link.label }}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.2" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('releases', () =>
  queryContent('releases').sort({ date: -1 }).find()
)
</script>

<style scoped>
.releases-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.release-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;
}

.release-cover img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius);
}

.release-title {
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: -0.02em;
}

.release-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.release-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  padding: 8px 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text);
  transition: border-color 0.2s, color 0.2s;
}

.release-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.release-body {
  margin-top: 24px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text);
  opacity: 0.8;
}

.release-body :deep(p) {
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .release-card {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .release-cover img {
    max-width: 280px;
  }

  .release-title {
    font-size: 1.4rem;
  }
}
</style>
