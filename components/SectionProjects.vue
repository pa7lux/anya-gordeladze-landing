<template>
  <section id="projects" v-if="data && data.length">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <article v-for="project in data" :key="project._path" class="project-card">
          <div v-if="project.image" class="project-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <div class="project-body">
              <ContentRenderer :value="project" />
            </div>
            <div v-if="project.links?.length" class="project-links">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener"
                :aria-label="link.label"
                class="project-social-link"
              >
                <svg v-if="link.icon === 'instagram'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <svg v-else-if="link.icon === 'facebook'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span v-else>{{ link.label }}</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('projects', () =>
  queryContent('projects').sort({ _file: 1 }).find()
)
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.3s;
}

.project-card:hover {
  border-color: #333;
}

.project-image img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.project-info {
  padding: 28px;
}

.project-info h3 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 12px;
}

.project-body {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.project-body :deep(p) {
  margin-bottom: 8px;
}

.project-links {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.project-social-link {
  color: var(--text-muted);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.project-social-link:hover {
  color: var(--text);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
