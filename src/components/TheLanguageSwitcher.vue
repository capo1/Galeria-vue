<template>
<div class="switch_container">
  <select class="LanguageSwitcher switch_lang"
          name="language"
          @change="changeLanguage">
    <option v-for="lang in supportedLanguages"
            :key="lang"
            :selected="isCurrentLanguage(lang)"
            :class="{ 'is-selected': isCurrentLanguage(lang) }"
            :value="lang">
      {{lang}}
    </option>
  </select>
 </div>
</template>
<script>
import { Trans } from '@/plugins/Translation'
export default {
  computed: {
    supportedLanguages () {
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },
  methods: {
    changeLanguage (e) {
      const lang = e.target.value
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    }
  }
}
</script>
<style scoped>
.switch_container{
    position:absolute;right:15px;padding:15px;
}
select.switch_lang {
   background-position: 95% center;
   background-repeat: no-repeat;
   border: 1px solid #AAA;
   color: #555;
   font-size: inherit;
   margin: 20px;
   overflow: hidden;
   padding: 5px 10px;
   text-overflow: ellipsis;
   white-space: nowrap;
   width: 80px;
}
</style>