<template>
  <div class="container">
    <h1>
      <img
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1280px-Telegram_2019_Logo.svg.png"
        alt="Telegram Logo"
      />
      <span> Telegram Serverless </span>
    </h1>
    <ul>
      <li>
        This static site hosted for free by
        <a
          href="https://core.telegram.org/bots/serverless#mini-app-front-end"
          target="_blank"
          rel="noopener"
          >mini app frontend</a
        >
      </li>
      <li>
        This Telegram bot
        <a href="tg://resolve?domain=ItsFlashyBot" target="_blank" rel="noopener">(FlashyBot)</a>
        logic managed at
        <a
          href="https://github.com/samithseu/tgsvl/tree/main/tgcloud"
          target="_blank"
          rel="noopener"
          >tgcloud/</a
        >
        folder
      </li>
      <li>
        Read
        <a href="https://core.telegram.org/bots/serverless" target="_blank" rel="noopener"
          >telegram serverless</a
        >
        to learn more.
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  --space-size: 3rem;
  width: fit-content;
  max-inline-size: min(620px, calc(100% - calc(var(--space-size) * 2)));
  margin-inline: auto;
  margin-block: var(--space-size);

  & > *:not(:last-child) {
    margin-block-end: 1.5rem;
  }

  & img {
    aspect-ratio: initial;
    width: 2rem;
    margin-inline-end: 0.3rem;
    vertical-align: middle;
  }

  & ul {
    padding-inline-start: 1rem;

    & > *:not(:last-child) {
      margin-block-end: 0.5rem;
    }

    & a {
      font-family: "Courier New", Courier, monospace;
      color: var(--clr-primary);
    }
  }
}
</style>
