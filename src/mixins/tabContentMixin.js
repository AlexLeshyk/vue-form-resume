import AppTabContent from "@/components/AppTabContent";
export default {
  emits: ['open-news','read-news','unmark'],
  components: {
    AppTabContent,
  },
  props: {
    tab: {
      type: Object,
      requried: true,
    },
    languageBase: String,
  },
  methods: {
    openContent() {
      this.$emit('open-news');
    },
    readContent() {
      this.$emit('read-news');
    },
    unmarkNews() {
      this.$emit('unmark');
    },
  },
}