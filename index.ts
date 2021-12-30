export default class HL {
  root;
  rootHTML;
  style;
  stamp;

  /**
   * 关键字高亮
   * @param root 查找根元素
   * @param style 默认背景高亮黄色
   */
  constructor(config: { root: Element | null; style?: string }) {
    if (!config.root) return;
    this.root = config.root;
    this.rootHTML = config.root.innerHTML;
    this.style = config.style ?? "background-color: #FF0";
    this.stamp = Date.now();

    // console.log('HL new', this);
  }

  /** 标记keyword */
  light(keyword: string) {
    const handler = (root: any) => {
      if (
        root.nodeName === "#text" &&
        root.parentNode.childNodes.length === 1
      ) {
        root.parentNode.innerHTML = root.parentNode.innerHTML.replace(
          new RegExp(keyword, "g"),
          `<span class="HL" style="${this.style}">${keyword}</span>`
        );
      } else {
        for (const node of root.childNodes) {
          handler(node);
        }
      }
    };

    if (!this.root) return;

    // 重置HTML
    if (Date.now() - this.stamp! > 200) {
      // console.log('HL reset');
      this.root.innerHTML = this.rootHTML!;
    }

    if (!keyword) return;
    handler(this.root);
  }
}
