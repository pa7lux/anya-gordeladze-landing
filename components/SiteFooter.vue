<template>
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-name">Anya Gordeladze</span>
      <SocialIcons />
      <span class="footer-copy">&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-name {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-copy {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>
