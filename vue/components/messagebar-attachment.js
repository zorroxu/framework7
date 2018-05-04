import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
let __vueComponentPropsKeys;
function __vueComponentGetPropKeys(props) {
  __vueComponentPropsKeys = Object.keys(props);
  return props;
}
export default {
  name: 'f7-messagebar-attachment',
  props: __vueComponentGetPropKeys({
    image: String,
    deletable: {
      type: Boolean,
      default: true
    },
    ...Mixins.colorProps
  }),
  created() {
    this.onClickBound = this.onClick.bind(this);
    this.onDeleteClickBound = this.onDeleteClick.bind(this);
  },
  render() {
    var _h = this.$createElement;
    const self = this;
    const {deletable, image, className, id, style} = self.props;
    const classes = Utils.classNames(className, 'messagebar-attachment', Mixins.colorClasses(self));
    return _h('div', {
      style: style,
      class: classes,
      on: { click: self.onClickBound },
      attrs: { id: id }
    }, [
      image && _h('img', { attrs: { src: image } }),
      deletable && _h('span', {
        class: 'messagebar-attachment-delete',
        on: { click: self.onDeleteClickBound }
      }),
      this.$slots['default']
    ]);
  },
  methods: {
    onClick(e) {
      this.dispatchEvent('attachment:click attachmentClick', e);
    },
    onDeleteClick(e) {
      this.dispatchEvent('attachment:delete attachmentDelete', e);
    },
    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }
  },
  computed: {
    props() {
      return __vueComponentProps(this, __vueComponentPropsKeys);
    }
  }
};