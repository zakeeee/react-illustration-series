(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{IcGc:function(e,n,t){e.exports=t.p+"static/minheap.fe2875a2.png"},WOyY:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("H1Ra"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"react-\u7b97\u6cd5\u4e4b\u5806\u6392\u5e8f"},l.a.createElement(r["AnchorLink"],{to:"#react-\u7b97\u6cd5\u4e4b\u5806\u6392\u5e8f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u7b97\u6cd5\u4e4b\u5806\u6392\u5e8f"),l.a.createElement("h2",{id:"\u6982\u5ff5"},l.a.createElement(r["AnchorLink"],{to:"#\u6982\u5ff5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6982\u5ff5"),l.a.createElement("p",null,"\u4e8c\u53c9\u5806\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5806, \u4e8c\u53c9\u5806\u662f",l.a.createElement(r["Link"],{to:"https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91#%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91"},"\u5b8c\u5168\u4e8c\u53c9\u6811"),"\u6216\u8005\u8fd1\u4f3c\u5b8c\u5168\u4e8c\u53c9\u6811."),l.a.createElement("p",null,"\u5806\u6392\u5e8f\u662f\u5229\u7528\u4e8c\u53c9\u5806\u7684\u7279\u6027, \u5bf9\u6839\u8282\u70b9(\u6700\u5927\u6216\u6700\u5c0f)\u8fdb\u884c\u5faa\u73af\u63d0\u53d6, \u4ece\u800c\u8fbe\u5230\u6392\u5e8f\u76ee\u7684(\u5806\u6392\u5e8f\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u9009\u62e9\u6392\u5e8f), \u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",l.a.createElement("code",null,"O(nlog n)"),"."),l.a.createElement("h2",{id:"\u7279\u6027"},l.a.createElement(r["AnchorLink"],{to:"#\u7279\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7279\u6027"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7236\u8282\u70b9\u7684\u503c>=\u5b50\u8282\u70b9\u7684\u503c(\u6700\u5927\u5806), \u7236\u8282\u70b9\u7684\u503c<=\u5b50\u8282\u70b9\u7684\u503c(\u6700\u5c0f\u5806). \u6bcf\u4e2a\u8282\u70b9\u7684\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u90fd\u662f\u4e00\u4e2a\u4e8c\u53c9\u5806."),l.a.createElement("li",null,"\u5047\u8bbe\u4e00\u4e2a\u6570\u7ec4",l.a.createElement("code",null,"[k0, k1, k2, ...kn]"),"\u4e0b\u6807\u4ece 0 \u5f00\u59cb. \u5219",l.a.createElement("code",null,"ki <= k2i+1,ki <= k2i+2")," \u6216\u8005 ",l.a.createElement("code",null,"ki >= k2i+1,ki >= k2i+2")," (i = 0,1,2,3 .. n/2)")),l.a.createElement("h2",{id:"\u57fa\u672c\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u4f7f\u7528"),l.a.createElement("p",null,"\u5047\u8bbe\u73b0\u5728\u6709\u4e00\u4e2a\u4e71\u5e8f\u6570\u7ec4, [5,8,0,10,4,6,1], \u73b0\u5728\u5c06\u5176\u6784\u9020\u6210\u4e00\u4e2a\u6700\u5c0f\u5806"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6784\u9020\u4e8c\u53c9\u5806",l.a.createElement("ul",null,l.a.createElement("li",null,"\u9700\u8981\u4ece\u6700\u540e\u4e00\u4e2a\u975e\u53f6\u5b50\u8282\u70b9\u5f00\u59cb, \u5411\u4e0b\u8c03\u6574\u5806\u7ed3\u6784")))),l.a.createElement("p",null,l.a.createElement("img",{src:t("IcGc"),alt:""})),l.a.createElement("ol",{start:2},l.a.createElement("li",null,"\u63d2\u5165\u8282\u70b9, \u91cd\u65b0\u5411\u4e0a\u8c03\u6574\u5806(",l.a.createElement("code",null,"sift-up"),")",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5c06\u65b0\u5143\u7d20\u63d2\u5165\u5230\u6570\u7ec4\u672b\u5c3e\u4e4b\u540e, \u8981\u91cd\u65b0\u8c03\u6574\u6570\u7ec4\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u4efb\u7136\u662f\u6700\u5c0f(\u6216\u6700\u5927)\u5806.")))),l.a.createElement("p",null,l.a.createElement("img",{src:t("kpkb"),alt:""})),l.a.createElement("ol",{start:3},l.a.createElement("li",null,"\u63d0\u53d6\u6216\u5220\u9664\u6839\u8282\u70b9(\u9876\u7aef\u8282\u70b9), \u91cd\u65b0\u5411\u4e0b\u8c03\u6574\u5806(",l.a.createElement("code",null,"sift-down"),")",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5bf9\u4e8e\u6700\u5927\u5806, \u63d0\u53d6\u7684\u662f\u6700\u5927\u503c. \u5bf9\u4e8e\u6700\u5c0f\u5806, \u63d0\u53d6\u7684\u662f\u6700\u5c0f\u503c."),l.a.createElement("li",null,"\u9876\u70b9\u88ab\u63d0\u53d6\u4e4b\u540e, \u8981\u91cd\u65b0\u8c03\u6574\u6570\u7ec4\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u4efb\u7136\u662f\u6700\u5c0f(\u6216\u6700\u5927)\u5806.")))),l.a.createElement("p",null,l.a.createElement("img",{src:t("o7qC"),alt:""})),l.a.createElement("ol",{start:4},l.a.createElement("li",null,"\u6392\u5e8f\u8fc7\u7a0b")),l.a.createElement("p",null,"\u5229\u7528\u4e8c\u53c9\u5806\u7684\u7279\u6027, \u6392\u5e8f\u5c31\u662f\u5faa\u73af\u63d0\u53d6\u6839\u8282\u70b9\u7684\u8fc7\u7a0b. \u5faa\u73af\u6267\u884c\u6b65\u9aa4 3, \u76f4\u5230\u5c06\u6240\u6709\u7684\u8282\u70b9\u90fd\u63d0\u53d6\u5b8c\u6210, \u88ab\u63d0\u53d6\u7684\u8282\u70b9\u6784\u6210\u7684\u6570\u7ec4\u5c31\u662f\u4e00\u4e2a\u6709\u5e8f\u6570\u7ec4."),l.a.createElement("p",null,"\u6ce8\u610f:"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u9700\u5347\u5e8f\u6392\u5e8f, \u5e94\u8be5\u6784\u9020\u6700\u5927\u5806. \u56e0\u4e3a\u6700\u5927\u7684\u5143\u7d20\u6700\u5148\u88ab\u63d0\u53d6\u51fa\u6765, \u88ab\u653e\u7f6e\u5230\u4e86\u6570\u7ec4\u7684\u6700\u540e, \u6700\u7ec8\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u6700\u5927\u5143\u7d20."),l.a.createElement("li",null,"\u5982\u9700\u964d\u5e8f\u6392\u5e8f, \u5e94\u8be5\u6784\u9020\u6700\u5c0f\u5806. \u56e0\u4e3a\u6700\u5c0f\u7684\u5143\u7d20\u6700\u5148\u88ab\u63d0\u53d6\u51fa\u6765, \u88ab\u653e\u7f6e\u5230\u4e86\u6570\u7ec4\u7684\u6700\u540e, \u6700\u7ec8\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u6700\u5c0f\u5143\u7d20."),l.a.createElement("li",null,"\u5806\u6392\u5e8f\u662f\u4e00\u79cd\u4e0d\u7a33\u5b9a\u6392\u5e8f(\u5bf9\u4e8e\u76f8\u540c\u5927\u5c0f\u7684\u5143\u7d20, \u5728\u6392\u5e8f\u4e4b\u540e\u6709\u53ef\u80fd\u548c\u6392\u5e8f\u524d\u7684\u5148\u540e\u6b21\u5e8f\u88ab\u6253\u4e71).")),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("p",null,"\u5c06\u4e71\u5e8f\u6570\u7ec4",l.a.createElement("code",null,"[5,8,0,10,4,6,1]"),"\u964d\u5e8f\u6392\u5217"),l.a.createElement("p",null,"\u6b65\u9aa4:"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u6784\u9020\u6700\u5c0f\u5806"),l.a.createElement("li",null,"\u5faa\u73af\u63d0\u53d6\u6839\u8282\u70b9, \u76f4\u5230\u5168\u90e8\u63d0\u53d6\u5b8c")),l.a.createElement(c["a"],{code:"const minHeapSort = arr => {\n  // 1. \u6784\u9020\u6700\u5c0f\u5806\n  buildMinHeap(arr);\n  // 2. \u5faa\u73af\u63d0\u53d6\u6839\u8282\u70b9arr[0], \u76f4\u5230\u5168\u90e8\u63d0\u53d6\u5b8c\n  for (let i = arr.length - 1; i > 0; i--) {\n    let tmp = arr[0];\n    arr[0] = arr[i];\n    arr[i] = tmp;\n    siftDown(arr, 0, i - 1);\n  }\n};\n\n// \u628a\u6574\u4e2a\u6570\u7ec4\u6784\u9020\u6210\u6700\u5c0f\u5806\nconst buildMinHeap = arr => {\n  if(arr.length < 2) {\n    return arr;\n  }\n  const startIndex = Math.floor(arr.length / 2 - 1);\n  for (let i = startIndex; i >= 0; i--) {\n    siftDown(arr, i, arr.length - 1);\n  }\n};\n\n// \u4ecestartIndex\u7d22\u5f15\u5f00\u59cb, \u5411\u4e0b\u8c03\u6574\u6700\u5c0f\u5806\nconst siftDown = (arr, startIndex, endIndex) => {\n  const leftChildIndx = 2 * startIndex + 1;\n  const rightChildIndx = 2 * startIndex + 2;\n  let swapIndex = startIndex;\n  let tmpNode = arr[startIndex];\n  if (leftChildIndx <= endIndex) {\n    if (arr[leftChildIndx] < tmpNode) {\n      // \u5f85\u5b9a\u662f\u5426\u4ea4\u6362, \u56e0\u4e3aright\u5b50\u8282\u70b9\u6709\u53ef\u80fd\u66f4\u5c0f\n      tmpNode = arr[leftChildIndx];\n      swapIndex = leftChildIndx;\n    }\n  }\n  if (rightChildIndx <= endIndex) {\n    if (arr[rightChildIndx] < tmpNode) {\n      // \u6bd4left\u8282\u70b9\u66f4\u5c0f, \u66ff\u6362swapIndex\n      tmpNode = arr[rightChildIndx];\n      swapIndex = rightChildIndx;\n    }\n  }\n  if (swapIndex !== startIndex) {\n    // 1.\u4ea4\u6362\u8282\u70b9\n    arr[swapIndex] = arr[startIndex];\n    arr[startIndex] = tmpNode;\n\n    // 2. \u9012\u5f52\u8c03\u7528, \u7ee7\u7eed\u5411\u4e0b\u8c03\u6574\n    siftDown(arr, swapIndex, endIndex);\n  }\n};",lang:"js"}),l.a.createElement("p",null,"\u6d4b\u8bd5:"),l.a.createElement(c["a"],{code:"var arr1 = [5, 8, 0, 10, 4, 6, 1];\nminHeapSort(arr1);\nconsole.log(arr1); // [10, 8, 6, 5,4, 1, 0]\n\nvar arr2 = [5];\nminHeapSort(arr2);\nconsole.log(arr2); // [ 5 ]\n\nvar arr3 = [5, 1];\nminHeapSort(arr3);\nconsole.log(arr3); //[ 5, 1 ]",lang:"js"}),l.a.createElement("h2",{id:"react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"},l.a.createElement(r["AnchorLink"],{to:"#react-\u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"React \u5f53\u4e2d\u7684\u4f7f\u7528\u573a\u666f"),l.a.createElement("p",null,"\u5bf9\u4e8e\u4e8c\u53c9\u5806\u7684\u5e94\u7528\u662f\u5728",l.a.createElement("code",null,"scheduler"),"\u5305\u4e2d, \u6709 2 \u4e2a\u6570\u7ec4",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js#L61-L63"},l.a.createElement("code",null,"taskQueue"),"\u548c",l.a.createElement("code",null,"timerQueue")),", \u5b83\u4eec\u90fd\u662f\u4ee5",l.a.createElement("code",null,"\u6700\u5c0f\u5806"),"\u7684\u5f62\u5f0f\u8fdb\u884c\u5b58\u50a8, \u8fd9\u6837\u5c31\u80fd\u4fdd\u8bc1\u4ee5",l.a.createElement("code",null,"O(1)"),"\u7684\u65f6\u95f4\u590d\u6742\u5ea6, \u53d6\u5230\u6570\u7ec4\u9876\u7aef\u7684\u5bf9\u8c61(\u4f18\u5148\u7ea7\u6700\u9ad8\u7684 task)."),l.a.createElement("p",null,"\u5177\u4f53\u7684\u8c03\u7528\u8fc7\u7a0b\u88ab\u5c01\u88c5\u5230\u4e86",l.a.createElement(r["Link"],{to:"https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/SchedulerMinHeap.js#L41-L87"},l.a.createElement("code",null,"SchedulerMinHeap.js")),", \u5176\u4e2d\u6709 2 \u4e2a\u51fd\u6570",l.a.createElement("code",null,"siftUp"),",",l.a.createElement("code",null,"siftDown"),"\u5206\u522b\u5bf9\u5e94\u5411\u4e0a\u8c03\u6574\u548c\u5411\u4e0b\u8c03\u6574."),l.a.createElement(c["a"],{code:"type Heap = Array<Node>;\ntype Node = {|\n  id: number,\n  sortIndex: number,\n|};\n\n// \u6dfb\u52a0\u65b0\u8282\u70b9, \u6dfb\u52a0\u4e4b\u540e, \u9700\u8981\u8c03\u7528`siftUp`\u51fd\u6570\u5411\u4e0a\u8c03\u6574\u5806.\nexport function push(heap: Heap, node: Node): void {\n  const index = heap.length;\n  heap.push(node);\n  siftUp(heap, node, index);\n}\n\n// \u67e5\u770b\u5806\u7684\u9876\u70b9, \u4e5f\u5c31\u662f\u4f18\u5148\u7ea7\u6700\u9ad8\u7684`task`\u6216`timer`\nexport function peek(heap: Heap): Node | null {\n  const first = heap[0];\n  return first === undefined ? null : first;\n}\n\n// \u5c06\u5806\u7684\u9876\u70b9\u63d0\u53d6\u51fa\u6765, \u5e76\u5220\u9664\u9876\u70b9\u4e4b\u540e, \u9700\u8981\u8c03\u7528`siftDown`\u51fd\u6570\u5411\u4e0b\u8c03\u6574\u5806.\nexport function pop(heap: Heap): Node | null {\n  const first = heap[0];\n  if (first !== undefined) {\n    const last = heap.pop();\n    if (last !== first) {\n      heap[0] = last;\n      siftDown(heap, last, 0);\n    }\n    return first;\n  } else {\n    return null;\n  }\n}\n\n// \u5f53\u63d2\u5165\u8282\u70b9\u4e4b\u540e, \u9700\u8981\u5411\u4e0a\u8c03\u6574\u5806\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u662f\u4e00\u4e2a\u6700\u5c0f\u5806.\nfunction siftUp(heap, node, i) {\n  let index = i;\n  while (true) {\n    const parentIndex = (index - 1) >>> 1;\n    const parent = heap[parentIndex];\n    if (parent !== undefined && compare(parent, node) > 0) {\n      // The parent is larger. Swap positions.\n      heap[parentIndex] = node;\n      heap[index] = parent;\n      index = parentIndex;\n    } else {\n      // The parent is smaller. Exit.\n      return;\n    }\n  }\n}\n\n// \u5411\u4e0b\u8c03\u6574\u5806\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u662f\u4e00\u4e2a\u6700\u5c0f\u5806.\nfunction siftDown(heap, node, i) {\n  let index = i;\n  const length = heap.length;\n  while (index < length) {\n    const leftIndex = (index + 1) * 2 - 1;\n    const left = heap[leftIndex];\n    const rightIndex = leftIndex + 1;\n    const right = heap[rightIndex];\n\n    // If the left or right node is smaller, swap with the smaller of those.\n    if (left !== undefined && compare(left, node) < 0) {\n      if (right !== undefined && compare(right, left) < 0) {\n        heap[index] = right;\n        heap[rightIndex] = node;\n        index = rightIndex;\n      } else {\n        heap[index] = left;\n        heap[leftIndex] = node;\n        index = leftIndex;\n      }\n    } else if (right !== undefined && compare(right, node) < 0) {\n      heap[index] = right;\n      heap[rightIndex] = node;\n      index = rightIndex;\n    } else {\n      // Neither child is smaller. Exit.\n      return;\n    }\n  }\n}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"peek"),"\u51fd\u6570: \u67e5\u770b\u5806\u7684\u9876\u70b9, \u4e5f\u5c31\u662f\u4f18\u5148\u7ea7\u6700\u9ad8\u7684",l.a.createElement("code",null,"task"),"\u6216",l.a.createElement("code",null,"timer"),"."),l.a.createElement("li",null,l.a.createElement("code",null,"pop"),"\u51fd\u6570: \u5c06\u5806\u7684\u9876\u70b9\u63d0\u53d6\u51fa\u6765, \u5e76\u5220\u9664\u9876\u70b9\u4e4b\u540e, \u9700\u8981\u8c03\u7528",l.a.createElement("code",null,"siftDown"),"\u51fd\u6570\u5411\u4e0b\u8c03\u6574\u5806."),l.a.createElement("li",null,l.a.createElement("code",null,"push"),"\u51fd\u6570: \u6dfb\u52a0\u65b0\u8282\u70b9, \u6dfb\u52a0\u4e4b\u540e, \u9700\u8981\u8c03\u7528",l.a.createElement("code",null,"siftUp"),"\u51fd\u6570\u5411\u4e0a\u8c03\u6574\u5806."),l.a.createElement("li",null,l.a.createElement("code",null,"siftDown"),"\u51fd\u6570: \u5411\u4e0b\u8c03\u6574\u5806\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u662f\u4e00\u4e2a\u6700\u5c0f\u5806."),l.a.createElement("li",null,l.a.createElement("code",null,"siftUp"),"\u51fd\u6570: \u5f53\u63d2\u5165\u8282\u70b9\u4e4b\u540e, \u9700\u8981\u5411\u4e0a\u8c03\u6574\u5806\u7ed3\u6784, \u4fdd\u8bc1\u6570\u7ec4\u662f\u4e00\u4e2a\u6700\u5c0f\u5806.")),l.a.createElement("h2",{id:"\u603b\u7ed3"},l.a.createElement(r["AnchorLink"],{to:"#\u603b\u7ed3","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),l.a.createElement("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86",l.a.createElement("code",null,"\u5806\u6392\u5e8f"),"\u7684\u57fa\u672c\u4f7f\u7528, \u5e76\u8bf4\u660e\u4e86",l.a.createElement("code",null,"\u5806\u6392\u5e8f"),"\u5728",l.a.createElement("code",null,"react"),"\u6e90\u7801\u4e2d\u7684\u5e94\u7528. \u5728\u9605\u8bfb",l.a.createElement("code",null,"scheduler"),"\u5305\u7684\u6e90\u7801\u65f6, \u4f1a\u66f4\u52a0\u6e05\u6670\u7684\u7406\u89e3\u4f5c\u8005\u7684\u601d\u8def.")))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}},kpkb:function(e,n,t){e.exports=t.p+"static/minheap-insert.3b25766c.png"},o7qC:function(e,n,t){e.exports=t.p+"static/minheap-remove.7ea00a86.png"}}]);