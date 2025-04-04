import{j as t}from"./jsx-runtime-BRtPMPcD.js";import{g as et}from"./index-BVKZFYvx.js";var b={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var j;function at(){return j||(j=1,function(o){(function(){var x={}.hasOwnProperty;function n(){for(var e="",a=0;a<arguments.length;a++){var i=arguments[a];i&&(e=u(e,l(i)))}return e}function l(e){if(typeof e=="string"||typeof e=="number")return e;if(typeof e!="object")return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var i in e)x.call(e,i)&&e[i]&&(a=u(a,i));return a}function u(e,a){return a?e?e+" "+a:e+a:e}o.exports?(n.default=n,o.exports=n):window.classNames=n})()}(b)),b.exports}var nt=at();const it=et(nt),s={"btn-square":"_btn-square_121fw_1","btn-pill":"_btn-pill_121fw_5","btn-shadowed":"_btn-shadowed_121fw_9","btn-icon-wrapper":"_btn-icon-wrapper_121fw_18","btn-icon":"_btn-icon_121fw_18"},r=({children:o,onClick:x,variant:n="primary",size:l,outline:u=!1,disabled:e=!1,block:a=!1,square:i=!1,pill:X=!1,shadow:Y=!1,iconStart:w,iconEnd:y,className:Z,...tt})=>{const rt=it("btn",u?`btn-outline-${n}`:`btn-${n}`,l?`btn-${l}`:"",i?s["btn-square"]:"",X?s["btn-pill"]:"",Y?s["btn-shadowed"]:"",a?"w-100 d-block":"",w||y?s["btn-icon-wrapper"]:"",Z);return t.jsxs("button",{className:rt,onClick:x,disabled:e,...tt,children:[w&&t.jsx("i",{className:`bi bi-${w} ${s["btn-icon"]}`,"aria-hidden":"true"}),o,y&&t.jsx("i",{className:`bi bi-${y} ${s["btn-icon"]}`,"aria-hidden":"true"})]})};r.__docgenInfo={description:`The Button component is a flexible, reusable interface element built on top of Bootstrap 5. It enhances the standard Bootstrap button with custom styling options, icon support, and improved interaction design, making it ideal for modern React applications.

Designed with scalability and accessibility in mind, the component supports:
- All standard Bootstrap variants and sizes
- Additional props like outline, square, shadow, iconStart, and iconEnd
- Seamless integration with Bootstrap Icons
- Custom styles via modular SCSS
- Full compatibility with native button attributes (type, disabled, onClick, etc.)

Whether you're building simple forms, complex dashboards, or action-heavy interfaces, this button adapts to your design and interaction needs.`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},outline:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},square:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},pill:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"true | false",elements:[{name:"literal",value:"true"},{name:"literal",value:"false"}]},description:"",defaultValue:{value:"false",computed:!1}},iconStart:{required:!1,tsType:{name:"string"},description:""},iconEnd:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const lt={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},variant:{control:{type:"radio"},options:["primary","secondary","success","danger","warning","info","light","dark","link"]},size:{control:{type:"radio"},defaultValue:"md",options:["sm","md","lg"],labels:{sm:"Small",md:"Medium",lg:"Large"}},outline:{control:{type:"boolean"}},square:{control:{type:"boolean"}},pill:{control:{type:"boolean"}},shadow:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},block:{control:{type:"boolean"}}}},d={args:{children:"Button",variant:"primary",size:"md",outline:!1,disabled:!1,square:!1,pill:!1,shadow:!1,block:!1,iconStart:"",iconEnd:"",className:""}},c={render:()=>t.jsxs("div",{style:{display:"block"},children:[t.jsx(r,{size:"sm",className:"m-2",children:"Small"}),t.jsx(r,{size:"md",className:"m-2",children:"Normal"}),t.jsx(r,{size:"lg",className:"m-2",children:"Large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{variant:"primary",children:"Primary"}),t.jsx(r,{variant:"secondary",children:"Secondary"}),t.jsx(r,{variant:"success",children:"Success"}),t.jsx(r,{variant:"danger",children:"Danger"}),t.jsx(r,{variant:"warning",children:"Warning"}),t.jsx(r,{variant:"info",children:"Info"}),t.jsx(r,{variant:"light",children:"Light"}),t.jsx(r,{variant:"dark",children:"Dark"}),t.jsx(r,{variant:"link",children:"Link"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",disabled:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",disabled:!0,children:"Secondary"}),t.jsx(r,{variant:"success",disabled:!0,children:"Success"}),t.jsx(r,{variant:"danger",disabled:!0,children:"Danger"}),t.jsx(r,{variant:"warning",disabled:!0,children:"Warning"}),t.jsx(r,{variant:"info",disabled:!0,children:"Info"}),t.jsx(r,{variant:"light",disabled:!0,children:"Light"}),t.jsx(r,{variant:"dark",disabled:!0,children:"Dark"}),t.jsx(r,{variant:"link",disabled:!0,children:"Link"})]})]}),parameters:{controls:{disable:!0}}},m={render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{variant:"primary",outline:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",outline:!0,children:"Secondary"}),t.jsx(r,{variant:"success",outline:!0,children:"Success"}),t.jsx(r,{variant:"danger",outline:!0,children:"Danger"}),t.jsx(r,{variant:"warning",outline:!0,children:"Warning"}),t.jsx(r,{variant:"info",outline:!0,children:"Info"}),t.jsx(r,{variant:"light",outline:!0,children:"Light"}),t.jsx(r,{variant:"dark",outline:!0,children:"Dark"}),t.jsx(r,{variant:"link",outline:!0,children:"Link"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",outline:!0,disabled:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",outline:!0,disabled:!0,children:"Secondary"}),t.jsx(r,{variant:"success",outline:!0,disabled:!0,children:"Success"}),t.jsx(r,{variant:"danger",outline:!0,disabled:!0,children:"Danger"}),t.jsx(r,{variant:"warning",outline:!0,disabled:!0,children:"Warning"}),t.jsx(r,{variant:"info",outline:!0,disabled:!0,children:"Info"}),t.jsx(r,{variant:"light",outline:!0,disabled:!0,children:"Light"}),t.jsx(r,{variant:"dark",outline:!0,disabled:!0,children:"Dark"}),t.jsx(r,{variant:"link",outline:!0,disabled:!0,children:"Link"})]})]}),parameters:{controls:{disable:!0}}},h={render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{variant:"primary",pill:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",pill:!0,children:"Secondary"}),t.jsx(r,{variant:"success",pill:!0,children:"Success"}),t.jsx(r,{variant:"danger",pill:!0,children:"Danger"}),t.jsx(r,{variant:"warning",pill:!0,children:"Warning"}),t.jsx(r,{variant:"info",pill:!0,children:"Info"}),t.jsx(r,{variant:"light",pill:!0,children:"Light"}),t.jsx(r,{variant:"dark",pill:!0,children:"Dark"}),t.jsx(r,{variant:"link",pill:!0,children:"Link"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",pill:!0,disabled:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",pill:!0,disabled:!0,children:"Secondary"}),t.jsx(r,{variant:"success",pill:!0,disabled:!0,children:"Success"}),t.jsx(r,{variant:"danger",pill:!0,disabled:!0,children:"Danger"}),t.jsx(r,{variant:"warning",pill:!0,disabled:!0,children:"Warning"}),t.jsx(r,{variant:"info",pill:!0,disabled:!0,children:"Info"}),t.jsx(r,{variant:"light",pill:!0,disabled:!0,children:"Light"}),t.jsx(r,{variant:"dark",pill:!0,disabled:!0,children:"Dark"}),t.jsx(r,{variant:"link",pill:!0,disabled:!0,children:"Link"})]})]}),parameters:{controls:{disable:!0}}},v={render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{variant:"primary",square:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",square:!0,children:"Secondary"}),t.jsx(r,{variant:"success",square:!0,children:"Success"}),t.jsx(r,{variant:"danger",square:!0,children:"Danger"}),t.jsx(r,{variant:"warning",square:!0,children:"Warning"}),t.jsx(r,{variant:"info",square:!0,children:"Info"}),t.jsx(r,{variant:"light",square:!0,children:"Light"}),t.jsx(r,{variant:"dark",square:!0,children:"Dark"}),t.jsx(r,{variant:"link",square:!0,children:"Link"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",square:!0,disabled:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",square:!0,disabled:!0,children:"Secondary"}),t.jsx(r,{variant:"success",square:!0,disabled:!0,children:"Success"}),t.jsx(r,{variant:"danger",square:!0,disabled:!0,children:"Danger"}),t.jsx(r,{variant:"warning",square:!0,disabled:!0,children:"Warning"}),t.jsx(r,{variant:"info",square:!0,disabled:!0,children:"Info"}),t.jsx(r,{variant:"light",square:!0,disabled:!0,children:"Light"}),t.jsx(r,{variant:"dark",square:!0,disabled:!0,children:"Dark"}),t.jsx(r,{variant:"link",square:!0,disabled:!0,children:"Link"})]})]}),parameters:{controls:{disable:!0}}},B={render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{variant:"primary",shadow:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",shadow:!0,children:"Secondary"}),t.jsx(r,{variant:"success",shadow:!0,children:"Success"}),t.jsx(r,{variant:"danger",shadow:!0,children:"Danger"}),t.jsx(r,{variant:"warning",shadow:!0,children:"Warning"}),t.jsx(r,{variant:"info",shadow:!0,children:"Info"}),t.jsx(r,{variant:"light",shadow:!0,children:"Light"}),t.jsx(r,{variant:"dark",shadow:!0,children:"Dark"}),t.jsx(r,{variant:"link",shadow:!0,children:"Link"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",shadow:!0,disabled:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",shadow:!0,disabled:!0,children:"Secondary"}),t.jsx(r,{variant:"success",shadow:!0,disabled:!0,children:"Success"}),t.jsx(r,{variant:"danger",shadow:!0,disabled:!0,children:"Danger"}),t.jsx(r,{variant:"warning",shadow:!0,disabled:!0,children:"Warning"}),t.jsx(r,{variant:"info",shadow:!0,disabled:!0,children:"Info"}),t.jsx(r,{variant:"light",shadow:!0,disabled:!0,children:"Light"}),t.jsx(r,{variant:"dark",shadow:!0,disabled:!0,children:"Dark"}),t.jsx(r,{variant:"link",shadow:!0,disabled:!0,children:"Link"})]})]}),parameters:{controls:{disable:!0}}},g={render:()=>t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{variant:"primary",block:!0,children:"Primary"}),t.jsx(r,{variant:"secondary",block:!0,children:"Secondary"}),t.jsx(r,{variant:"success",block:!0,children:"Success"}),t.jsx(r,{variant:"danger",block:!0,children:"Danger"}),t.jsx(r,{variant:"warning",block:!0,children:"Warning"}),t.jsx(r,{variant:"info",block:!0,children:"Info"}),t.jsx(r,{variant:"light",block:!0,children:"Light"}),t.jsx(r,{variant:"dark",block:!0,children:"Dark"}),t.jsx(r,{variant:"link",block:!0,children:"Link"})]}),parameters:{controls:{disable:!0}}},f={args:{children:"Button With Icon",iconStart:"cloud-download",iconEnd:"",className:""},render:()=>t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{size:"sm",iconStart:"arrow-left",children:"Left"}),t.jsx(r,{size:"sm",iconEnd:"arrow-right",children:"Right"}),t.jsx(r,{size:"sm",iconStart:"arrow-left",iconEnd:"arrow-right",children:"Left and Right"}),t.jsx(r,{size:"sm",iconStart:"arrow-left"}),t.jsx(r,{size:"sm",iconEnd:"arrow-right"}),t.jsx(r,{size:"sm",iconStart:"arrow-left",iconEnd:"arrow-right"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{iconStart:"arrow-left",children:"Left"}),t.jsx(r,{iconEnd:"arrow-right",children:"Right"}),t.jsx(r,{iconStart:"arrow-left",iconEnd:"arrow-right",children:"Left and Right"}),t.jsx(r,{iconStart:"arrow-left"}),t.jsx(r,{iconEnd:"arrow-right"}),t.jsx(r,{iconStart:"arrow-left",iconEnd:"arrow-right"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{square:!0,iconStart:"arrow-left",children:"Left"}),t.jsx(r,{square:!0,iconEnd:"arrow-right",children:"Right"}),t.jsx(r,{square:!0,iconStart:"arrow-left",iconEnd:"arrow-right",children:"Left and Right"}),t.jsx(r,{square:!0,iconStart:"arrow-left"}),t.jsx(r,{square:!0,iconEnd:"arrow-right"}),t.jsx(r,{square:!0,iconStart:"arrow-left",iconEnd:"arrow-right"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"},children:[t.jsx(r,{pill:!0,iconStart:"arrow-left",children:"Left"}),t.jsx(r,{pill:!0,iconEnd:"arrow-right",children:"Right"}),t.jsx(r,{pill:!0,iconStart:"arrow-left",iconEnd:"arrow-right",children:"Left and Right"}),t.jsx(r,{pill:!0,iconStart:"arrow-left"}),t.jsx(r,{pill:!0,iconEnd:"arrow-right"}),t.jsx(r,{pill:!0,iconStart:"arrow-left",iconEnd:"arrow-right"})]}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[t.jsx(r,{size:"lg",iconStart:"arrow-left",children:"Left"}),t.jsx(r,{size:"lg",iconEnd:"arrow-right",children:"Right"}),t.jsx(r,{size:"lg",iconStart:"arrow-left",iconEnd:"arrow-right",children:"Left and Right"}),t.jsx(r,{size:"lg",iconStart:"arrow-left"}),t.jsx(r,{size:"lg",iconEnd:"arrow-right"}),t.jsx(r,{size:"lg",iconStart:"arrow-left",iconEnd:"arrow-right"})]})]}),parameters:{controls:{disable:!0}}};var k,S,q;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    outline: false,
    disabled: false,
    square: false,
    pill: false,
    shadow: false,
    block: false,
    iconStart: '',
    iconEnd: '',
    className: ''
  }
}`,...(q=(S=d.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var L,W,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'block'
  }}>
      <Button size="sm" className="m-2">
        Small
      </Button>
      <Button size="md" className="m-2">
        Normal
      </Button>
      <Button size="lg" className="m-2">
        Large
      </Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(W=c.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,z,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" disabled={true}>
          Secondary
        </Button>
        <Button variant="success" disabled={true}>
          Success
        </Button>
        <Button variant="danger" disabled={true}>
          Danger
        </Button>
        <Button variant="warning" disabled={true}>
          Warning
        </Button>
        <Button variant="info" disabled={true}>
          Info
        </Button>
        <Button variant="light" disabled={true}>
          Light
        </Button>
        <Button variant="dark" disabled={true}>
          Dark
        </Button>
        <Button variant="link" disabled={true}>
          Link
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var P,R,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button variant="primary" outline={true}>
          Primary
        </Button>
        <Button variant="secondary" outline={true}>
          Secondary
        </Button>
        <Button variant="success" outline={true}>
          Success
        </Button>
        <Button variant="danger" outline={true}>
          Danger
        </Button>
        <Button variant="warning" outline={true}>
          Warning
        </Button>
        <Button variant="info" outline={true}>
          Info
        </Button>
        <Button variant="light" outline={true}>
          Light
        </Button>
        <Button variant="dark" outline={true}>
          Dark
        </Button>
        <Button variant="link" outline={true}>
          Link
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" outline={true} disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" outline={true} disabled={true}>
          Secondary
        </Button>
        <Button variant="success" outline={true} disabled={true}>
          Success
        </Button>
        <Button variant="danger" outline={true} disabled={true}>
          Danger
        </Button>
        <Button variant="warning" outline={true} disabled={true}>
          Warning
        </Button>
        <Button variant="info" outline={true} disabled={true}>
          Info
        </Button>
        <Button variant="light" outline={true} disabled={true}>
          Light
        </Button>
        <Button variant="dark" outline={true} disabled={true}>
          Dark
        </Button>
        <Button variant="link" outline={true} disabled={true}>
          Link
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var _,T,V;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button variant="primary" pill={true}>
          Primary
        </Button>
        <Button variant="secondary" pill={true}>
          Secondary
        </Button>
        <Button variant="success" pill={true}>
          Success
        </Button>
        <Button variant="danger" pill={true}>
          Danger
        </Button>
        <Button variant="warning" pill={true}>
          Warning
        </Button>
        <Button variant="info" pill={true}>
          Info
        </Button>
        <Button variant="light" pill={true}>
          Light
        </Button>
        <Button variant="dark" pill={true}>
          Dark
        </Button>
        <Button variant="link" pill={true}>
          Link
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" pill={true} disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" pill={true} disabled={true}>
          Secondary
        </Button>
        <Button variant="success" pill={true} disabled={true}>
          Success
        </Button>
        <Button variant="danger" pill={true} disabled={true}>
          Danger
        </Button>
        <Button variant="warning" pill={true} disabled={true}>
          Warning
        </Button>
        <Button variant="info" pill={true} disabled={true}>
          Info
        </Button>
        <Button variant="light" pill={true} disabled={true}>
          Light
        </Button>
        <Button variant="dark" pill={true} disabled={true}>
          Dark
        </Button>
        <Button variant="link" pill={true} disabled={true}>
          Link
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(T=h.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var C,$,O;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button variant="primary" square={true}>
          Primary
        </Button>
        <Button variant="secondary" square={true}>
          Secondary
        </Button>
        <Button variant="success" square={true}>
          Success
        </Button>
        <Button variant="danger" square={true}>
          Danger
        </Button>
        <Button variant="warning" square={true}>
          Warning
        </Button>
        <Button variant="info" square={true}>
          Info
        </Button>
        <Button variant="light" square={true}>
          Light
        </Button>
        <Button variant="dark" square={true}>
          Dark
        </Button>
        <Button variant="link" square={true}>
          Link
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" square={true} disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" square={true} disabled={true}>
          Secondary
        </Button>
        <Button variant="success" square={true} disabled={true}>
          Success
        </Button>
        <Button variant="danger" square={true} disabled={true}>
          Danger
        </Button>
        <Button variant="warning" square={true} disabled={true}>
          Warning
        </Button>
        <Button variant="info" square={true} disabled={true}>
          Info
        </Button>
        <Button variant="light" square={true} disabled={true}>
          Light
        </Button>
        <Button variant="dark" square={true} disabled={true}>
          Dark
        </Button>
        <Button variant="link" square={true} disabled={true}>
          Link
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=($=v.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var A,F,M;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button variant="primary" shadow={true}>
          Primary
        </Button>
        <Button variant="secondary" shadow={true}>
          Secondary
        </Button>
        <Button variant="success" shadow={true}>
          Success
        </Button>
        <Button variant="danger" shadow={true}>
          Danger
        </Button>
        <Button variant="warning" shadow={true}>
          Warning
        </Button>
        <Button variant="info" shadow={true}>
          Info
        </Button>
        <Button variant="light" shadow={true}>
          Light
        </Button>
        <Button variant="dark" shadow={true}>
          Dark
        </Button>
        <Button variant="link" shadow={true}>
          Link
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button variant="primary" shadow={true} disabled={true}>
          Primary
        </Button>
        <Button variant="secondary" shadow={true} disabled={true}>
          Secondary
        </Button>
        <Button variant="success" shadow={true} disabled={true}>
          Success
        </Button>
        <Button variant="danger" shadow={true} disabled={true}>
          Danger
        </Button>
        <Button variant="warning" shadow={true} disabled={true}>
          Warning
        </Button>
        <Button variant="info" shadow={true} disabled={true}>
          Info
        </Button>
        <Button variant="light" shadow={true} disabled={true}>
          Light
        </Button>
        <Button variant="dark" shadow={true} disabled={true}>
          Dark
        </Button>
        <Button variant="link" shadow={true} disabled={true}>
          Link
        </Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(F=B.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" block={true}>
        Primary
      </Button>
      <Button variant="secondary" block={true}>
        Secondary
      </Button>
      <Button variant="success" block={true}>
        Success
      </Button>
      <Button variant="danger" block={true}>
        Danger
      </Button>
      <Button variant="warning" block={true}>
        Warning
      </Button>
      <Button variant="info" block={true}>
        Info
      </Button>
      <Button variant="light" block={true}>
        Light
      </Button>
      <Button variant="dark" block={true}>
        Dark
      </Button>
      <Button variant="link" block={true}>
        Link
      </Button>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Button With Icon',
    iconStart: 'cloud-download',
    iconEnd: '',
    className: ''
  },
  render: () => <div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button size="sm" iconStart="arrow-left">
          Left
        </Button>
        <Button size="sm" iconEnd="arrow-right">
          Right
        </Button>
        <Button size="sm" iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button size="sm" iconStart="arrow-left"></Button>
        <Button size="sm" iconEnd="arrow-right"></Button>
        <Button size="sm" iconStart="arrow-left" iconEnd="arrow-right"></Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button iconStart="arrow-left">Left</Button>
        <Button iconEnd="arrow-right">Right</Button>
        <Button iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button iconStart="arrow-left"></Button>
        <Button iconEnd="arrow-right"></Button>
        <Button iconStart="arrow-left" iconEnd="arrow-right"></Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button square={true} iconStart="arrow-left">
          Left
        </Button>
        <Button square={true} iconEnd="arrow-right">
          Right
        </Button>
        <Button square={true} iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button square={true} iconStart="arrow-left"></Button>
        <Button square={true} iconEnd="arrow-right"></Button>
        <Button square={true} iconStart="arrow-left" iconEnd="arrow-right"></Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '1rem'
    }}>
        <Button pill={true} iconStart="arrow-left">
          Left
        </Button>
        <Button pill={true} iconEnd="arrow-right">
          Right
        </Button>
        <Button pill={true} iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button pill={true} iconStart="arrow-left"></Button>
        <Button pill={true} iconEnd="arrow-right"></Button>
        <Button pill={true} iconStart="arrow-left" iconEnd="arrow-right"></Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <Button size="lg" iconStart="arrow-left">
          Left
        </Button>
        <Button size="lg" iconEnd="arrow-right">
          Right
        </Button>
        <Button size="lg" iconStart="arrow-left" iconEnd="arrow-right">
          Left and Right
        </Button>
        <Button size="lg" iconStart="arrow-left"></Button>
        <Button size="lg" iconEnd="arrow-right"></Button>
        <Button size="lg" iconStart="arrow-left" iconEnd="arrow-right"></Button>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ut=["Default","ButtonSizes","ButtonVariants","OutlineButtons","PillButtons","SquareButtons","ShadowedButtons","BlockButtons","buttonIcon"];export{g as BlockButtons,c as ButtonSizes,p as ButtonVariants,d as Default,m as OutlineButtons,h as PillButtons,B as ShadowedButtons,v as SquareButtons,ut as __namedExportsOrder,f as buttonIcon,lt as default};
