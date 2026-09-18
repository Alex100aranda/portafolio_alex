<script setup lang="ts">
import { reactive, ref } from 'vue';

const WHATSAPP_NUMBER = '525536659768';

const form = reactive({
  nombre: '',
  email: '',
  mensaje: '',
});

const errors = reactive({
  nombre: '',
  email: '',
  mensaje: '',
});

const status = ref<'idle' | 'sent'>('idle');

function validate(): boolean {
  errors.nombre = form.nombre.trim().length < 2 ? 'Escribe tu nombre.' : '';
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Escribe un correo válido.';
  errors.mensaje = form.mensaje.trim().length < 10 ? 'Cuéntame un poco más sobre el proyecto.' : '';
  return !errors.nombre && !errors.email && !errors.mensaje;
}

function handleSubmit() {
  if (!validate()) return;

  const texto = `Hola, soy ${form.nombre}. ${form.mensaje}\n\n(contacto: ${form.email})`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener');

  status.value = 'sent';
}
</script>

<template>
  <form novalidate class="space-y-5" @submit.prevent="handleSubmit">
    <div>
      <label for="nombre" class="mb-1.5 block text-sm text-[var(--color-muted)]">Nombre</label>
      <input
        id="nombre"
        v-model="form.nombre"
        type="text"
        autocomplete="name"
        class="w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2.5 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
      <p v-if="errors.nombre" class="mt-1.5 text-xs text-red-400">{{ errors.nombre }}</p>
    </div>

    <div>
      <label for="email" class="mb-1.5 block text-sm text-[var(--color-muted)]">Correo</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        autocomplete="email"
        class="w-full rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2.5 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
      <p v-if="errors.email" class="mt-1.5 text-xs text-red-400">{{ errors.email }}</p>
    </div>

    <div>
      <label for="mensaje" class="mb-1.5 block text-sm text-[var(--color-muted)]">Mensaje</label>
      <textarea
        id="mensaje"
        v-model="form.mensaje"
        rows="4"
        class="w-full resize-none rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2.5 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
      <p v-if="errors.mensaje" class="mt-1.5 text-xs text-red-400">{{ errors.mensaje }}</p>
    </div>

    <button
      type="submit"
      class="w-full rounded-sm bg-[var(--color-accent)] px-4 py-2.5 text-sm font-medium text-[var(--color-base)] transition-opacity hover:opacity-90"
    >
      Enviar por WhatsApp
    </button>

    <p v-if="status === 'sent'" class="text-sm text-[var(--color-live)]">
      Se abrió WhatsApp con tu mensaje listo para enviar.
    </p>
  </form>
</template>
