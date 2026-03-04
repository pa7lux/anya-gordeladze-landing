<template>
  <div v-if="links" class="social-icons">
    <a
      v-for="link in links.social"
      :key="link.url"
      :href="link.url"
      target="_blank"
      rel="noopener"
      :aria-label="link.label"
      class="social-link"
    >
      <svg v-if="link.icon === 'instagram'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
      <svg v-else-if="link.icon === 'facebook'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>
    <a
      v-for="link in links.music"
      :key="link.url"
      :href="link.url"
      target="_blank"
      rel="noopener"
      :aria-label="link.label"
      class="social-link"
    >
      <span class="music-label">{{ link.label }}</span>
    </a>
  </div>
</template>

<script setup>
const { data: links } = await useAsyncData('links', () =>
  queryContent('links').findOne()
)
</script>

<style scoped>
.social-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.social-link {
  color: var(--text-muted);
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.social-link:hover {
  color: var(--text);
}

.music-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.02em;
}
</style>
