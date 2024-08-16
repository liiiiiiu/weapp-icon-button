// components/IconButton/IconButton.ts
Component({
  options: {
    styleIsolation: 'shared'
  },

  properties: {
    id: String,
    buttonId: String,
    formType: String,
    lang: String,
    icon: String,
    iconSize: {
        type: String,
        value: '1.2em',
    },
    image: String,
    imageMode: {
      type: String,
      value: 'scaleToFill'
    },
    imageWidth: {
      type: String,
      value: '54%'
    },
    imageHeight: {
      type: String,
      value: '54%'
    },
    classPrefix: {
        type: String,
        value: 'van-icon',
    },
    plain: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    customStyle: String,
    type: {
        type: String,
        value: 'default',
    },
    size: {
        type: String,
        value: 'normal',
    },
    loading: Boolean,
    loadingType: {
        type: String,
        value: 'circular',
    },
    loadingSize: {
        type: String,
        value: '20px',
    }
  },

  data: {
  },

  methods: {
    onClick(event) {
      this.triggerEvent('click', event)
    }
  }
})