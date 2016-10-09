export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 10,
            "column": 2
          },
          "end": {
            "line": 15,
            "column": 2
          }
        },
        "moduleName": "standard-evaluator/templates/components/file-picker.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","file-container");
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","fa fa-close file-icon");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["content","file.fileName",["loc",[null,[12,4],[12,21]]],0,0,0,0],
        ["element","action",["removeFile",["get","file",["loc",[null,[13,59],[13,63]]],0,0,0,0]],[],["loc",[null,[13,37],[13,65]]],0,0]
      ],
      locals: ["file"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 0
        }
      },
      "moduleName": "standard-evaluator/templates/components/file-picker.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","col-sm-6 col-sm-offset-3");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"id","file-multiple-button");
      dom.setAttribute(el3,"class","hidden");
      dom.setAttribute(el3,"type","file");
      dom.setAttribute(el3,"title","Select a file");
      dom.setAttribute(el3,"multiple","");
      dom.setAttribute(el3,"webkitdirectory","");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("input");
      dom.setAttribute(el3,"id","file-single-button");
      dom.setAttribute(el3,"class","hidden");
      dom.setAttribute(el3,"type","file");
      dom.setAttribute(el3,"title","Select a file");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row file-buttons-container");
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","select-multiplefile-button");
      var el5 = dom.createTextNode("Select Folder");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n			");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","select-singlefile-button");
      var el5 = dom.createTextNode("Single File");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n		");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0, 1]);
      var element3 = dom.childAt(element2, [5]);
      var element4 = dom.childAt(element3, [1]);
      var element5 = dom.childAt(element3, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element4);
      morphs[1] = dom.createElementMorph(element5);
      morphs[2] = dom.createMorphAt(element2,7,7);
      return morphs;
    },
    statements: [
      ["element","action",["openMultipleFileSelector"],[],["loc",[null,[7,43],[7,80]]],0,0],
      ["element","action",["openSingleFileSelector"],[],["loc",[null,[8,41],[8,76]]],0,0],
      ["block","each",[["get","files",["loc",[null,[10,10],[10,15]]],0,0,0,0]],[],0,null,["loc",[null,[10,2],[15,11]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));