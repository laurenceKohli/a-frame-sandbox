AFRAME.registerComponent('pavage-carre', {
  schema: {
    width: {type: 'number', default: 10},
    deepth: {type: 'number', default: 10},
    boxSize: {type: 'number', default: 2},
    gap: {type: 'number', default: 0.1},
  },
init : function () {    
    const box = document.createElement('a-box'); 
    box.setAttribute('width', this.data.boxSize);
    box.setAttribute('height', this.data.boxSize);
    box.setAttribute('depth', this.data.boxSize);

    for (let i = 0; i < this.data.width; i++) {
        for (let j = 0; j < this.data.deepth; j++) {
            const clone = box.cloneNode();
            clone.setAttribute('position', `${i * (this.data.boxSize + this.data.gap)} 0 ${-(j * (this.data.boxSize + this.data.gap))}`);
          this.el.appendChild(clone);
        }
      }
},
update: function () {
},
  tick: function () {
    
  }
});