const wrapper =document.querySelector("#wrapper")


class MakeDiv {
  constructor (selector) {
    let new_div = document.createElement("div");
    new_div.id=`node${selector}`
    wrapper.append(new_div) 
  }
    hide(){
  this.$domNode.style.display="none"
  }
  show(){
    this.$domNode.style.display="block"
    }
}


class MakeNode extends MakeDiv {
  constructor (options) {
    super(options.selector)

    this.$domNode=document.querySelector(`#node${options.selector}`)
    this.$domNode.style.width="20px"
    this.$domNode.style.background="red"
    this.$domNode.style.borderRadius="50%"
    this.$domNode.innerHTML=(options.selector)
  }
}

const node1 = new MakeNode({
 selector: "1",
})

const node2 = new MakeNode({
  selector: "2",
 })


