import './jsonview.scss';

import getDataType from './utils/getDataType';
import { listen, detach, element } from './utils/dom';
var initialVal=0;
var darkMode=false;
const classes = {
    HIDDEN: 'hidden',
    CARET_ICON: 'caret-icon',
    CARET_RIGHT: 'fa-caret-right',
    CARET_DOWN: 'fa-caret-down',
    ICON: 'fas'
}

function expandedTemplate(params = {}) {
  const { key, size } = params;
  return `
    <div class="line">
      <div class="caret-icon"><i class="fas fa-caret-right"></i></div>
      <div class="json-key">${key}</div>
      <div class="json-size">${size}</div>
    </div>
  `
}

function notExpandedTemplate(params = {}) {
  const { key, value, type } = params;
  return `
    <div class="line">
      <div class="empty-icon"></div>
      <div class="json-key">${key}</div>
      <div class="json-separator">:</div>
      <div class="json-value json-${type}${darkMode?'-dark':''} ">${value}</div>
    </div>
  `
}

function createContainerElement() {
  const el = element('div');
  el.className = 'json-container';
  if(darkMode) el.className='json-containerDark'
  return el;
}

function hideNodeChildren(node) {
  node.children.forEach((child) => {
    child.el.classList.add(classes.HIDDEN);
    if (child.isExpanded) {
      hideNodeChildren(child);
    }
  });
}

function showNodeChildren(node) {
  node.children.forEach((child) => {
    child.el.classList.remove(classes.HIDDEN);
    if (child.isExpanded) {
      showNodeChildren(child);
    }
  });
}

function setCaretIconDown(node) {
  if (node.children.length > 0) {
    const icon = node.el.querySelector('.' + classes.ICON);
    if (icon) {
      icon.classList.replace(classes.CARET_RIGHT, classes.CARET_DOWN);
    }
  }
}

function setCaretIconRight(node) {
  if (node.children.length > 0) {
    const icon = node.el.querySelector('.' + classes.ICON);
    if (icon) {
      icon.classList.replace(classes.CARET_DOWN, classes.CARET_RIGHT);
    }
  }
}

function toggleNode(node) {
  if (node.isExpanded) {
    node.isExpanded = false;
    setCaretIconRight(node);
    hideNodeChildren(node);
  } else {
    node.isExpanded = true;
    setCaretIconDown(node);
    showNodeChildren(node);
  }
}

/**
 * Create node html element
 * @param {object} node 
 * @return html element
 */
function createNodeElement(node) {
  let el = element('div');

  const getSizeString = (node) => {
    const len = node.children.length;
    if (node.type === 'array') return `[${len} documents]`;
    if (node.type === 'object') return `{${len} fields}`;
    return null;
  }

  if (node.children.length > 0) {
    if(node.depth==1){
      el.innerHTML = expandedTemplate({
        key: 'document '+Number(Number(node.key)+initialVal),
        size: getSizeString(node),
      })
    }else{
      el.innerHTML = expandedTemplate({
        key: node.key,
        size: getSizeString(node),
      })
    }
      
      
    
    const caretEl = el.querySelector('.' + classes.CARET_ICON);
    node.dispose = listen(caretEl, 'click', () => toggleNode(node));
  } else {
    el.innerHTML = notExpandedTemplate({
      key: node.key,
      value: node.value,
      type: typeof node.value
    })
  }

  const lineEl = el.children[0];

  if (node.parent !== null) {
    lineEl.classList.add(classes.HIDDEN);
  }

  lineEl.style = 'margin-left: ' + node.depth * 18 + 'px;';

  return lineEl;
}

/**
 * Recursively traverse Tree object
 * @param {Object} node
 * @param {Callback} callback
 */
function traverse(node, callback) {
  callback(node);
  if (node.children.length > 0) {
    node.children.forEach((child) => {
      traverse(child, callback);
    });
  }
}

/**
 * Recursively traverse Tree object
 * @param {Object} node
 * @param {Callback} callback
 * @param {Number} depth
 */
 function traverseDepth(node, callback,depth) {
  callback(node);
  if (node.children.length > 0 && depth>0) {
      if(depth==1){
        callback=function(child) {
          child.el.classList.remove(classes.HIDDEN);
          child.isExpanded = false;
          setCaretIconRight(child);
        }
      }
      node.children.forEach((child) => {
        traverseDepth(child, callback,depth-1);
      });
    }
    
}

/**
 * Create node object
 * @param {object} opt options
 * @return {object}
 */
function createNode(opt = {}) {
  return {
    key: opt.key || null,
    parent: opt.parent || null,
    value: opt.hasOwnProperty('value') ? opt.value : null,
    isExpanded: opt.isExpanded || false,
    type: opt.type || null,
    children: opt.children || [],
    el: opt.el || null,
    depth: opt.depth || 0,
    dispose: null
  }
}

/**
 * Create subnode for node
 * @param {object} Json data
 * @param {object} node
 */
function createSubnode(data, node) {
  if (typeof data === 'object') {
    for (let key in data) {
      const child = createNode({
        value: data[key],
        key: key,
        depth: node.depth + 1,
        type: getDataType(data[key]),
        parent: node,
      });
      node.children.push(child);
      createSubnode(data[key], child);
    }
  }
}

function getJsonObject(data) {
  return typeof data === 'string' ? JSON.parse(data) : data;
}

/**
 * Create tree
 * @param {object | string} jsonData 
 * @return {object}
 */
export function create(jsonData) {
  const parsedData = getJsonObject(jsonData);
  const rootNode = createNode({
    value: parsedData,
    key: 'Documents',
    type: getDataType(parsedData),
  });
  createSubnode(parsedData, rootNode);
  return rootNode;
}

/**
 * Create tree
 * @param {object | string} jsonData 
 * @return {object}
 */
 export function createWithInitial(jsonData,valInit,darkMode) {
  const parsedData = getJsonObject(jsonData);
  initialVal=valInit;
  this.darkMode=darkMode;
  const rootNode = createNode({
    value: parsedData,
    key: 'Documents',
    type: getDataType(parsedData),
  });
  createSubnode(parsedData, rootNode);
  return rootNode;
}

/**
 * Render JSON string into DOM container
 * @param {string | object} jsonData
 * @param {htmlElement} targetElement
 * @return {object} tree
 */
export function renderJSON(jsonData, targetElement) {
  const parsedData = getJsonObject(jsonData);
  const tree = createTree(parsedData);
  render(tree, targetElement);
  return tree;
}

/**
 * Render tree into DOM container
 * @param {object} tree
 * @param {htmlElement} targetElement
 */
export function render(tree, targetElement) {
  const containerEl = createContainerElement();

  traverse(tree, function(node) {
    node.el = createNodeElement(node);
    containerEl.appendChild(node.el);
  });

  targetElement.appendChild(containerEl);
}

export function expand(node) {
  traverse(node, function(child) {
    child.el.classList.remove(classes.HIDDEN);
    child.isExpanded = true;
    setCaretIconDown(child);
  });
}

export function expandDepth(node,depth) {
  traverseDepth(node, function(child) {
    child.el.classList.remove(classes.HIDDEN);
    child.isExpanded = true;
    setCaretIconDown(child);
  },depth);
}

export function collapse(node) {
  traverse(node, function(child) {
    child.isExpanded = false;
    if (child.depth > node.depth) child.el.classList.add(classes.HIDDEN);
    setCaretIconRight(child);
  });
}

export function destroy(tree) {
  traverse(tree, (node) => {
    if (node.dispose) {
      node.dispose(); 
    }
  })
  detach(tree.el.parentNode);
}

/**
 * Export public interface
 */
export default {
  render,
  create,
  createWithInitial,
  renderJSON,
  expand,
  expandDepth,
  collapse,
  traverse,
  destroy
}
