<template>
  <section id="events" v-if="data && data.length">
    <div class="container">
      <h2 class="section-title">Upcoming Events</h2>
      <div class="events-list">
        <article
          v-for="event in data"
          :key="event._path"
          class="event-card"
          :class="{ 'has-poster': event.poster }"
        >
          <div v-if="event.poster" class="event-poster">
            <img :src="event.poster" :alt="event.title" />
          </div>
          <div class="event-info">
            <time class="event-date">{{ formatDate(event.date) }}</time>
            <span class="event-time">{{ event.time }}</span>
            <h3 class="event-venue">
              <a v-if="event.venueUrl" :href="event.venueUrl" target="_blank" rel="noopener">{{ event.venue }}</a>
              <template v-else>{{ event.venue }}</template>
            </h3>
            <p class="event-title">{{ event.title }}</p>
            <a
              v-if="event.tickets"
              :href="event.tickets"
              target="_blank"
              rel="noopener"
              class="event-tickets"
            >
              Tickets
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" stroke-width="1.2" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data } = await useAsyncData('events', () =>
  queryContent('events').sort({ date: 1 }).find()
)

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<style scoped>
.events-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.event-card {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.event-card.has-poster {
  grid-template-columns: 280px 1fr;
  gap: 32px;
}

.event-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-info {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.has-poster .event-info {
  padding: 32px 32px 32px 0;
}

.event-date {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.event-time {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 2px;
}

.event-venue {
  font-size: 1.25rem;
  margin-top: 16px;
}

.event-title {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 4px;
}

.event-tickets {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  padding: 8px 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border);
  border-radius: 100px;
  color: var(--text);
  width: fit-content;
  transition: border-color 0.2s, color 0.2s;
}

.event-tickets:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 768px) {
  .event-card.has-poster {
    grid-template-columns: 1fr;
  }

  .event-poster img {
    aspect-ratio: 16 / 9;
  }

  .event-info,
  .has-poster .event-info {
    padding: 24px;
  }
}
</style>
