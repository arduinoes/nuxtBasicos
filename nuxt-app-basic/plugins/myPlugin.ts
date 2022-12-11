export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        saludo: () => 'Hola Miranda',
        //dia: Date.prototype.toLocaleTimeString()
        // new Date(Date.now())
      }
    }
  })
  