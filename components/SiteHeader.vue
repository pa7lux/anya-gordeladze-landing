<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#" class="logo">Anya Gordeladze</a>
      <nav class="nav-desktop">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#releases">Releases</a>
        <a href="#projects">Projects</a>
      </nav>
      <button
        class="nav-toggle"
        :class="{ active: menuOpen }"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span /><span />
      </button>
    </div>
    <Transition name="slide">
      <nav v-if="menuOpen" class="nav-mobile">
        <a href="#about" @click="menuOpen = false">About</a>
        <a href="#events" @click="menuOpen = false">Events</a>
        <a href="#releases" @click="menuOpen = false">Releases</a>
        <a href="#projects" @click="menuOpen = false">Projects</a>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
}

.logo {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.nav-desktop {
  display: flex;
  gap: 32px;
}

.nav-desktop a {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: 0.02em;
  transition: color 0.2s;
}

.nav-desktop a:hover {
  color: var(--text);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.3s, opacity 0.3s;
}

.nav-toggle.active span:first-child {
  transform: translateY(3.25px) rotate(45deg);
}

.nav-toggle.active span:last-child {
  transform: translateY(-3.25px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--border);
  background: rgba(13, 13, 13, 0.95);
}

.nav-mobile a {
  padding: 12px 0;
  font-size: 0.9rem;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}

.nav-mobile a:last-child {
  border-bottom: none;
}

.nav-mobile a:hover {
  color: var(--text);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-mobile {
    display: flex;
  }
}
</style>
