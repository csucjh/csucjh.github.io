"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89],{474:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-02e47b0e",path:"/tools/%E6%89%93%E5%8D%B0%E9%80%92%E5%BD%92%E6%A0%88.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"打印递归栈",slug:"打印递归栈",children:[]}],filePathRelative:"tools/打印递归栈.md",git:{updatedTime:163880696e4,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},9710:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h2 id="打印递归栈" tabindex="-1"><a class="header-anchor" href="#打印递归栈" aria-hidden="true">#</a> 打印递归栈</h2><p><strong>在递归函数的开头，调用 <code>print(count++)</code> 并打印关键变量；然后在所有 <code>return</code> 语句之前调用 <code>print(--count)</code> 并打印返回值</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;————&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',3),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);