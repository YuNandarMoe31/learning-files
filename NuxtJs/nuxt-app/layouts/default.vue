<template>
    <div>
      <nav>
        <Title>Nuxt 3 Title</Title>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
      <slot />
    </div>
</template>