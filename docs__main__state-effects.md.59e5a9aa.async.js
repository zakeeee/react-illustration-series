(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{WcqN:function(e,t,l){"use strict";l.r(t);var n=l("q1tI"),a=l.n(n),c=l("dEAq"),o=l("H1Ra"),r=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u72b6\u6001\u4e0e\u526f\u4f5c\u7528"},a.a.createElement(c["AnchorLink"],{to:"#\u72b6\u6001\u4e0e\u526f\u4f5c\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u4e0e\u526f\u4f5c\u7528"),a.a.createElement("p",null,"\u5728\u524d\u6587\u6211\u4eec\u5df2\u7ecf\u5206\u6790\u4e86",a.a.createElement("code",null,"fiber\u6811"),"\u4ece",a.a.createElement("code",null,"\u6784\u9020"),"\u5230",a.a.createElement("code",null,"\u6e32\u67d3"),"\u7684\u5173\u952e\u8fc7\u7a0b. \u672c\u8282\u6211\u4eec\u7ad9\u5728",a.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u7684\u89c6\u89d2, \u8003\u8651\u4e00\u4e2a\u5177\u4f53\u7684",a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u5982\u4f55\u5f71\u54cd\u6700\u7ec8\u7684\u6e32\u67d3."),a.a.createElement("p",null,"\u56de\u987e",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactInternalTypes.js#L47-L174"},"fiber \u6570\u636e\u7ed3\u6784"),", \u5e76\u7ed3\u5408\u524d\u6587",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u7cfb\u5217\u7684\u89e3\u8bfb, \u6211\u4eec\u6ce8\u610f\u5230",a.a.createElement("code",null,"fiber"),"\u4f17\u591a\u5c5e\u6027\u4e2d, \u6709 2 \u7c7b\u5c5e\u6027\u5341\u5206\u5173\u952e:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u7684\u81ea\u8eab\u72b6\u6001: \u5728",a.a.createElement("code",null,"renderRootSync[Concurrent]"),"\u9636\u6bb5, \u4e3a\u5b50\u8282\u70b9\u63d0\u4f9b\u786e\u5b9a\u7684\u8f93\u5165\u6570\u636e, \u76f4\u63a5\u5f71\u54cd\u5b50\u8282\u70b9\u7684\u751f\u6210.")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u7684\u526f\u4f5c\u7528: \u5728",a.a.createElement("code",null,"commitRoot"),"\u9636\u6bb5, \u5982\u679c",a.a.createElement("code",null,"fiber"),"\u88ab\u6807\u8bb0\u6709\u526f\u4f5c\u7528, \u5219\u526f\u4f5c\u7528\u76f8\u5173\u51fd\u6570\u4f1a\u88ab(\u540c\u6b65/\u5f02\u6b65)\u8c03\u7528."))),a.a.createElement(o["a"],{code:"export type Fiber = {|\n  // 1. fiber\u8282\u70b9\u81ea\u8eab\u72b6\u6001\u76f8\u5173\n  pendingProps: any,\n  memoizedProps: any,\n  updateQueue: mixed,\n  memoizedState: any,\n\n  // 2. fiber\u8282\u70b9\u526f\u4f5c\u7528(Effect)\u76f8\u5173\n  flags: Flags,\n  subtreeFlags: Flags, // v17.0.2\u672a\u542f\u7528\n  deletions: Array<Fiber> | null, // v17.0.2\u672a\u542f\u7528\n  nextEffect: Fiber | null,\n  firstEffect: Fiber | null,\n  lastEffect: Fiber | null,\n|};",lang:"js"}),a.a.createElement("h2",{id:"\u72b6\u6001"},a.a.createElement(c["AnchorLink"],{to:"#\u72b6\u6001","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001"),a.a.createElement("p",null,"\u4e0e",a.a.createElement("code",null,"\u72b6\u6001"),"\u76f8\u5173\u6709 4 \u4e2a\u5c5e\u6027:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"fiber.pendingProps"),": \u8f93\u5165\u5c5e\u6027, \u4ece",a.a.createElement("code",null,"ReactElement"),"\u5bf9\u8c61\u4f20\u5165\u7684 props. \u5b83\u548c",a.a.createElement("code",null,"fiber.memoizedProps"),"\u6bd4\u8f83\u53ef\u4ee5\u5f97\u51fa\u5c5e\u6027\u662f\u5426\u53d8\u52a8."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.memoizedProps"),": \u4e0a\u4e00\u6b21\u751f\u6210\u5b50\u8282\u70b9\u65f6\u7528\u5230\u7684\u5c5e\u6027, \u751f\u6210\u5b50\u8282\u70b9\u4e4b\u540e\u4fdd\u6301\u5728\u5185\u5b58\u4e2d. \u5411\u4e0b\u751f\u6210\u5b50\u8282\u70b9\u4e4b\u524d\u53eb\u505a",a.a.createElement("code",null,"pendingProps"),", \u751f\u6210\u5b50\u8282\u70b9\u4e4b\u540e\u4f1a\u628a",a.a.createElement("code",null,"pendingProps"),"\u8d4b\u503c\u7ed9",a.a.createElement("code",null,"memoizedProps"),"\u7528\u4e8e\u4e0b\u4e00\u6b21\u6bd4\u8f83.",a.a.createElement("code",null,"pendingProps"),"\u548c",a.a.createElement("code",null,"memoizedProps"),"\u6bd4\u8f83\u53ef\u4ee5\u5f97\u51fa\u5c5e\u6027\u662f\u5426\u53d8\u52a8."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.updateQueue"),": \u5b58\u50a8",a.a.createElement("code",null,"update\u66f4\u65b0\u5bf9\u8c61"),"\u7684\u961f\u5217, \u6bcf\u4e00\u6b21\u53d1\u8d77\u66f4\u65b0, \u90fd\u9700\u8981\u5728\u8be5\u961f\u5217\u4e0a\u521b\u5efa\u4e00\u4e2a",a.a.createElement("code",null,"update\u5bf9\u8c61"),"."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.memoizedState"),": \u4e0a\u4e00\u6b21\u751f\u6210\u5b50\u8282\u70b9\u4e4b\u540e\u4fdd\u6301\u5728\u5185\u5b58\u4e2d\u7684\u5c40\u90e8\u72b6\u6001.")),a.a.createElement("p",null,"\u5b83\u4eec\u7684\u4f5c\u7528\u53ea\u5c40\u9650\u4e8e",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5, \u76f4\u63a5\u5f71\u54cd\u5b50\u8282\u70b9\u7684\u751f\u6210."),a.a.createElement("h2",{id:"\u526f\u4f5c\u7528"},a.a.createElement(c["AnchorLink"],{to:"#\u526f\u4f5c\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u526f\u4f5c\u7528"),a.a.createElement("p",null,"\u4e0e",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),"\u76f8\u5173\u6709 4 \u4e2a\u5c5e\u6027:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"fiber.flags"),": \u6807\u5fd7\u4f4d, \u8868\u660e\u8be5",a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u6709\u526f\u4f5c\u7528(\u5728 v17.0.2 \u4e2d\u5171\u5b9a\u4e49\u4e86",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberFlags.js#L13"},"28 \u79cd\u526f\u4f5c\u7528"),")."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.nextEffect"),": \u5355\u5411\u94fe\u8868, \u6307\u5411\u4e0b\u4e00\u4e2a\u526f\u4f5c\u7528 ",a.a.createElement("code",null,"fiber"),"\u8282\u70b9."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.firstEffect"),": \u5355\u5411\u94fe\u8868, \u6307\u5411\u7b2c\u4e00\u4e2a\u526f\u4f5c\u7528 ",a.a.createElement("code",null,"fiber")," \u8282\u70b9."),a.a.createElement("li",null,a.a.createElement("code",null,"fiber.lastEffect"),": \u5355\u5411\u94fe\u8868, \u6307\u5411\u6700\u540e\u4e00\u4e2a\u526f\u4f5c\u7528 ",a.a.createElement("code",null,"fiber")," \u8282\u70b9.")),a.a.createElement("p",null,"\u901a\u8fc7\u524d\u6587",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u6211\u4eec\u77e5\u9053, \u5355\u4e2a",a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u7684\u526f\u4f5c\u7528\u961f\u5217\u6700\u540e\u90fd\u4f1a\u4e0a\u79fb\u5230\u6839\u8282\u70b9\u4e0a. \u6240\u4ee5\u5728",a.a.createElement("code",null,"commitRoot"),"\u9636\u6bb5\u4e2d, ",a.a.createElement("code",null,"react"),"\u63d0\u4f9b\u4e86 3 \u79cd\u5904\u7406\u526f\u4f5c\u7528\u7684\u65b9\u5f0f(\u8be6\u89c1",a.a.createElement(c["AnchorLink"],{to:"./fibertree-commit#%E6%B8%B2%E6%9F%93"},"fiber \u6811\u6e32\u67d3"),")."),a.a.createElement("p",null,"\u53e6\u5916, ",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),"\u7684\u8bbe\u8ba1\u53ef\u4ee5\u7406\u89e3\u4e3a\u5bf9",a.a.createElement("code",null,"\u72b6\u6001"),"\u529f\u80fd\u4e0d\u8db3\u7684\u8865\u5145."),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("code",null,"\u72b6\u6001"),"\u662f\u4e00\u4e2a",a.a.createElement("code",null,"\u9759\u6001"),"\u7684\u529f\u80fd, \u5b83\u53ea\u80fd\u4e3a\u5b50\u8282\u70b9\u63d0\u4f9b\u6570\u636e\u6e90."),a.a.createElement("li",null,"\u800c",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),"\u662f\u4e00\u4e2a",a.a.createElement("code",null,"\u52a8\u6001"),"\u529f\u80fd, \u7531\u4e8e\u5b83\u7684\u8c03\u7528\u65f6\u673a\u662f\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3\u9636\u6bb5"),", \u6545\u5b83\u62e5\u6709\u66f4\u591a\u7684\u80fd\u529b, \u80fd\u8f7b\u677e\u83b7\u53d6",a.a.createElement("code",null,"\u7a81\u53d8\u524d\u5feb\u7167, \u7a81\u53d8\u540e\u7684DOM\u8282\u70b9\u7b49"),". \u751a\u81f3\u901a\u8fc7",a.a.createElement("code",null,"\u8c03\u7528api"),"\u53d1\u8d77\u65b0\u7684\u4e00\u8f6e",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),", \u8fdb\u800c\u6539\u53d8\u66f4\u591a\u7684",a.a.createElement("code",null,"\u72b6\u6001"),", \u5f15\u53d1\u66f4\u591a\u7684",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),".")),a.a.createElement("h2",{id:"\u5916\u90e8-api"},a.a.createElement(c["AnchorLink"],{to:"#\u5916\u90e8-api","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5916\u90e8 api"),a.a.createElement("p",null,a.a.createElement("code",null,"fiber"),"\u5bf9\u8c61\u7684\u8fd9 2 \u7c7b\u5c5e\u6027, \u53ef\u4ee5\u5f71\u54cd\u5230\u6e32\u67d3\u7ed3\u679c, \u4f46\u662f",a.a.createElement("code",null,"fiber"),"\u7ed3\u6784\u59cb\u7ec8\u662f\u4e00\u4e2a\u5185\u6838\u4e2d\u7684\u7ed3\u6784, \u5bf9\u4e8e\u5916\u90e8\u6765\u8bb2\u662f\u65e0\u611f\u77e5\u7684, \u5bf9\u4e8e\u8c03\u7528\u65b9\u6765\u8bb2, \u751a\u81f3\u90fd\u65e0\u9700\u77e5\u9053",a.a.createElement("code",null,"fiber"),"\u7ed3\u6784\u7684\u5b58\u5728. \u6240\u4ee5\u6b63\u5e38\u53ea\u6709\u901a\u8fc7\u66b4\u9732",a.a.createElement("code",null,"api"),"\u6765\u76f4\u63a5\u6216\u95f4\u63a5\u7684\u4fee\u6539\u8fd9 2 \u7c7b\u5c5e\u6027."),a.a.createElement("p",null,"\u4ece",a.a.createElement("code",null,"react"),"\u5305\u66b4\u9732\u51fa\u7684",a.a.createElement("code",null,"api"),"\u6765\u5f52\u7eb3, \u53ea\u6709 2 \u7c7b\u7ec4\u4ef6\u652f\u6301\u4fee\u6539:"),a.a.createElement("blockquote",null,a.a.createElement("p",null,"\u672c\u8282\u53ea\u8ba8\u8bba\u4f7f\u7528",a.a.createElement("code",null,"api"),"\u7684\u76ee\u7684\u662f\u4fee\u6539",a.a.createElement("code",null,"fiber"),"\u7684",a.a.createElement("code",null,"\u72b6\u6001"),"\u548c",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),", \u8fdb\u800c\u53ef\u4ee5\u6539\u53d8\u6574\u4e2a\u6e32\u67d3\u7ed3\u679c. \u672c\u8282\u5148\u4ecb\u7ecd api \u4e0e",a.a.createElement("code",null,"\u72b6\u6001"),"\u548c",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),"\u7684\u8054\u7cfb, \u6709\u5173",a.a.createElement("code",null,"api"),"\u7684\u5177\u4f53\u5b9e\u73b0\u4f1a\u5728",a.a.createElement("code",null,"class\u7ec4\u4ef6"),",",a.a.createElement("code",null,"Hook\u539f\u7406"),"\u7ae0\u8282\u4e2d\u8be6\u7ec6\u5206\u6790.")),a.a.createElement("h3",{id:"class-\u7ec4\u4ef6"},a.a.createElement(c["AnchorLink"],{to:"#class-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"class \u7ec4\u4ef6"),a.a.createElement(o["a"],{code:"class App extends React.Component {\n  constructor() {\n    this.state = {\n      // \u521d\u59cb\u72b6\u6001\n      a: 1,\n    };\n  }\n  changeState = () => {\n    this.setState({ a: ++this.state.a }); // \u8fdb\u5165reconciler\u6d41\u7a0b\n  };\n\n  // \u751f\u547d\u5468\u671f\u51fd\u6570: \u72b6\u6001\u76f8\u5173\n  static getDerivedStateFromProps(nextProps, prevState) {\n    console.log('getDerivedStateFromProps');\n    return prevState;\n  }\n\n  // \u751f\u547d\u5468\u671f\u51fd\u6570: \u72b6\u6001\u76f8\u5173\n  shouldComponentUpdate(newProps, newState, nextContext) {\n    console.log('shouldComponentUpdate');\n    return true;\n  }\n\n  // \u751f\u547d\u5468\u671f\u51fd\u6570: \u526f\u4f5c\u7528\u76f8\u5173 fiber.flags |= Update\n  componentDidMount() {\n    console.log('componentDidMount');\n  }\n\n  // \u751f\u547d\u5468\u671f\u51fd\u6570: \u526f\u4f5c\u7528\u76f8\u5173 fiber.flags |= Snapshot\n  getSnapshotBeforeUpdate(prevProps, prevState) {\n    console.log('getSnapshotBeforeUpdate');\n  }\n\n  // \u751f\u547d\u5468\u671f\u51fd\u6570: \u526f\u4f5c\u7528\u76f8\u5173 fiber.flags |= Update\n  componentDidUpdate() {\n    console.log('componentDidUpdate');\n  }\n\n  render() {\n    // \u8fd4\u56de\u4e0b\u7ea7ReactElement\u5bf9\u8c61\n    return <button onClick={this.changeState}>{this.state.a}</button>;\n  }\n}",lang:"js"}),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("p",null,"\u72b6\u6001\u76f8\u5173: ",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5."),a.a.createElement("ol",null,a.a.createElement("li",null,"\u6784\u9020\u51fd\u6570: ",a.a.createElement("code",null,"constructor"),"\u5b9e\u4f8b\u5316\u65f6\u6267\u884c, \u53ef\u4ee5\u8bbe\u7f6e\u521d\u59cb state, \u53ea\u6267\u884c\u4e00\u6b21."),a.a.createElement("li",null,"\u751f\u547d\u5468\u671f: ",a.a.createElement("code",null,"getDerivedStateFromProps"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5(",a.a.createElement("code",null,"renderRootSync[Concurrent]"),")\u6267\u884c, \u53ef\u4ee5\u4fee\u6539 state(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L867-L875"},"\u94fe\u63a5"),")."),a.a.createElement("li",null,"\u751f\u547d\u5468\u671f: ",a.a.createElement("code",null,"shouldComponentUpdate"),"\u5728, ",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5(",a.a.createElement("code",null,"renderRootSync[Concurrent]"),")\u6267\u884c, \u8fd4\u56de\u503c\u51b3\u5b9a\u662f\u5426\u6267\u884c render(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberClassComponent.old.js#L1135-L1143"},"\u94fe\u63a5"),")."))),a.a.createElement("li",null,a.a.createElement("p",null,"\u526f\u4f5c\u7528\u76f8\u5173: ",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5."),a.a.createElement("ol",null,a.a.createElement("li",null,"\u751f\u547d\u5468\u671f: ",a.a.createElement("code",null,"getSnapshotBeforeUpdate"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5(",a.a.createElement("code",null,"commitRoot->commitBeforeMutationEffects->commitBeforeMutationEffectOnFiber"),")\u6267\u884c(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L264"},"\u94fe\u63a5"),")."),a.a.createElement("li",null,"\u751f\u547d\u5468\u671f: ",a.a.createElement("code",null,"componentDidMount"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5(",a.a.createElement("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber"),")\u6267\u884c(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L533"},"\u94fe\u63a5"),")."),a.a.createElement("li",null,"\u751f\u547d\u5468\u671f: ",a.a.createElement("code",null,"componentDidUpdate"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5(",a.a.createElement("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber"),")\u6267\u884c(",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L587"},"\u94fe\u63a5"),").")))),a.a.createElement("p",null,"\u53ef\u4ee5\u770b\u5230, \u5b98\u65b9",a.a.createElement("code",null,"api"),"\u63d0\u4f9b\u7684",a.a.createElement("code",null,"class\u7ec4\u4ef6"),"\u751f\u547d\u5468\u671f\u51fd\u6570\u5b9e\u9645\u4e0a\u4e5f\u662f\u56f4\u7ed5",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u548c",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u6765\u63d0\u4f9b\u7684."),a.a.createElement("h3",{id:"function-\u7ec4\u4ef6"},a.a.createElement(c["AnchorLink"],{to:"#function-\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"function \u7ec4\u4ef6"),a.a.createElement("p",null,"\u6ce8: ",a.a.createElement("code",null,"function\u7ec4\u4ef6"),"\u4e0e",a.a.createElement("code",null,"class\u7ec4\u4ef6"),"\u6700\u5927\u7684\u4e0d\u540c\u662f: ",a.a.createElement("code",null,"class\u7ec4\u4ef6"),"\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2a",a.a.createElement("code",null,"instance"),"\u6240\u4ee5\u62e5\u6709\u72ec\u7acb\u7684\u5c40\u90e8\u72b6\u6001; \u800c",a.a.createElement("code",null,"function\u7ec4\u4ef6"),"\u4e0d\u4f1a\u5b9e\u4f8b\u5316, \u5b83\u53ea\u662f\u88ab\u76f4\u63a5\u8c03\u7528, \u6545\u65e0\u6cd5\u7ef4\u62a4\u4e00\u4efd\u72ec\u7acb\u7684\u5c40\u90e8\u72b6\u6001, \u53ea\u80fd\u4f9d\u9760",a.a.createElement("code",null,"Hook"),"\u5bf9\u8c61\u95f4\u63a5\u5b9e\u73b0\u5c40\u90e8\u72b6\u6001(\u6709\u5173\u66f4\u591a",a.a.createElement("code",null,"Hook"),"\u5b9e\u73b0\u7ec6\u8282, \u5728",a.a.createElement("code",null,"Hook\u539f\u7406"),"\u7ae0\u8282\u4e2d\u8be6\u7ec6\u8ba8\u8bba)."),a.a.createElement("p",null,"\u5728",a.a.createElement("code",null,"v17.0.2"),"\u4e2d\u5171\u5b9a\u4e49\u4e86",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L111-L125"},"14 \u79cd Hook"),", \u5176\u4e2d\u6700\u5e38\u7528\u7684",a.a.createElement("code",null,"useState, useEffect, useLayoutEffect\u7b49")),a.a.createElement(o["a"],{code:"function App() {\n  // \u72b6\u6001\u76f8\u5173: \u521d\u59cb\u72b6\u6001\n  const [a, setA] = useState(1);\n  const changeState = () => {\n    setA(++a); // \u8fdb\u5165reconciler\u6d41\u7a0b\n  };\n\n  // \u526f\u4f5c\u7528\u76f8\u5173: fiber.flags |= Update | Passive;\n  useEffect(() => {\n    console.log(`useEffect`);\n  }, []);\n\n  // \u526f\u4f5c\u7528\u76f8\u5173: fiber.flags |= Update;\n  useLayoutEffect(() => {\n    console.log(`useLayoutEffect`);\n  }, []);\n\n  // \u8fd4\u56de\u4e0b\u7ea7ReactElement\u5bf9\u8c61\n  return <button onClick={changeState}>{a}</button>;\n}",lang:"js"}),a.a.createElement("ol",null,a.a.createElement("li",null,"\u72b6\u6001\u76f8\u5173: ",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5.",a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"useState"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6784\u9020"),"\u9636\u6bb5(",a.a.createElement("code",null,"renderRootSync[Concurrent]"),")\u6267\u884c, \u53ef\u4ee5\u4fee\u6539",a.a.createElement("code",null,"Hook.memoizedState"),"."))),a.a.createElement("li",null,"\u526f\u4f5c\u7528\u76f8\u5173: ",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5.",a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"useEffect"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5(",a.a.createElement("code",null,"commitRoot->commitBeforeMutationEffects->commitBeforeMutationEffectOnFiber"),")\u6267\u884c(\u6ce8\u610f\u662f\u5f02\u6b65\u6267\u884c, ",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2290-L2295"},"\u94fe\u63a5"),")."),a.a.createElement("li",null,a.a.createElement("code",null,"useLayoutEffect"),"\u5728",a.a.createElement("code",null,"fiber\u6811\u6e32\u67d3"),"\u9636\u6bb5(",a.a.createElement("code",null,"commitRoot->commitLayoutEffects->commitLayoutEffectOnFiber->commitHookEffectListMount"),")\u6267\u884c(\u540c\u6b65\u6267\u884c, ",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L481"},"\u94fe\u63a5"),").")))),a.a.createElement("h3",{id:"\u7ec6\u8282\u4e0e\u8bef\u533a"},a.a.createElement(c["AnchorLink"],{to:"#\u7ec6\u8282\u4e0e\u8bef\u533a","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u7ec6\u8282\u4e0e\u8bef\u533a"),a.a.createElement("p",null,"\u8fd9\u91cc\u6709 2 \u4e2a\u7ec6\u8282:"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("code",null,"useEffect(function()","{","}",", [])"),"\u4e2d\u7684\u51fd\u6570\u662f",a.a.createElement(c["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L2290-L2295"},"\u5f02\u6b65\u6267\u884c"),", \u56e0\u4e3a\u5b83\u7ecf\u8fc7\u4e86\u8c03\u5ea6\u4e2d\u5fc3(\u5177\u4f53\u5b9e\u73b0\u53ef\u4ee5\u56de\u987e",a.a.createElement(c["Link"],{to:"./scheduler"},"\u8c03\u5ea6\u539f\u7406"),")."),a.a.createElement("li",null,a.a.createElement("code",null,"useLayoutEffect"),"\u548c",a.a.createElement("code",null,"Class\u7ec4\u4ef6"),"\u4e2d\u7684",a.a.createElement("code",null,"componentDidMount,componentDidUpdate"),"\u4ece\u8c03\u7528\u65f6\u673a\u4e0a\u6765\u8bb2\u662f\u7b49\u4ef7\u7684, \u56e0\u4e3a\u4ed6\u4eec\u90fd\u5728",a.a.createElement("code",null,"commitRoot->commitLayoutEffects"),"\u51fd\u6570\u4e2d\u88ab\u8c03\u7528.",a.a.createElement("ul",null,a.a.createElement("li",null,"\u8bef\u533a: \u867d\u7136\u5b98\u7f51\u6587\u6863\u63a8\u8350\u5c3d\u53ef\u80fd\u4f7f\u7528\u6807\u51c6\u7684 ",a.a.createElement("code",null,"useEffect")," \u4ee5\u907f\u514d\u963b\u585e\u89c6\u89c9\u66f4\u65b0 , \u6240\u4ee5\u5f88\u591a\u5f00\u53d1\u8005\u4f7f\u7528",a.a.createElement("code",null,"useEffect"),"\u6765\u4ee3\u66ff",a.a.createElement("code",null,"componentDidMount,componentDidUpdate"),"\u662f\u4e0d\u51c6\u786e\u7684, \u5982\u679c\u5b8c\u5168\u7c7b\u6bd4, ",a.a.createElement("code",null,"useLayoutEffect"),"\u6bd4",a.a.createElement("code",null,"useEffect"),"\u66f4\u7b26\u5408",a.a.createElement("code",null,"componentDidMount,componentDidUpdate"),"\u7684\u5b9a\u4e49.")))),a.a.createElement("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u4e0a\u8ff0\u7ed3\u8bba, \u53ef\u4ee5\u67e5\u770b",a.a.createElement(c["Link"],{to:"https://codesandbox.io/s/fervent-napier-1ysb5"},"codesandbox \u4e2d\u7684\u4f8b\u5b50"),"."),a.a.createElement("h2",{id:"\u603b\u7ed3"},a.a.createElement(c["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),a.a.createElement("p",null,"\u672c\u8282\u4ece",a.a.createElement("code",null,"fiber"),"\u89c6\u89d2\u51fa\u53d1, \u603b\u7ed3\u4e86",a.a.createElement("code",null,"fiber"),"\u8282\u70b9\u4e2d\u53ef\u4ee5\u5f71\u54cd\u6700\u7ec8\u6e32\u67d3\u7ed3\u679c\u7684 2 \u7c7b\u5c5e\u6027(",a.a.createElement("code",null,"\u72b6\u6001"),"\u548c",a.a.createElement("code",null,"\u526f\u4f5c\u7528"),").\u5e76\u4e14\u5f52\u7eb3\u4e86",a.a.createElement("code",null,"class"),"\u548c",a.a.createElement("code",null,"function"),"\u7ec4\u4ef6\u4e2d, \u76f4\u63a5\u6216\u95f4\u63a5\u66f4\u6539",a.a.createElement("code",null,"fiber"),"\u5c5e\u6027\u7684\u5e38\u7528\u65b9\u5f0f. \u6700\u540e\u4ece",a.a.createElement("code",null,"fiber\u6811\u6784\u9020\u548c\u6e32\u67d3"),"\u7684\u89d2\u5ea6\u5bf9",a.a.createElement("code",null,"class\u7684\u751f\u547d\u5468\u671f\u51fd\u6570"),"\u4e0e",a.a.createElement("code",null,"function\u7684Hooks\u51fd\u6570"),"\u8fdb\u884c\u4e86\u6bd4\u8f83.")))}));t["default"]=e=>{var t=a.a.useContext(c["context"]),l=t.demos;return a.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(r,{demos:l})}}}]);