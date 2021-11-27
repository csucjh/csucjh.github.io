"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[328],{2793:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-8127a4c2",path:"/array/303.%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2-%E6%95%B0%E7%BB%84%E4%B8%8D%E5%8F%AF%E5%8F%98.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[303] 区域和检索 - 数组不可变",slug:"_303-区域和检索-数组不可变",children:[{level:3,title:"迭代求和",slug:"迭代求和",children:[]},{level:3,title:"前缀和",slug:"前缀和",children:[]}]}],filePathRelative:"array/303.区域和检索-数组不可变.md",git:{updatedTime:1638029587e3,contributors:[{name:"csucjh",email:"csucjh@163.com",commits:1}]}}},8405:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h2 id="_303-区域和检索-数组不可变" tabindex="-1"><a class="header-anchor" href="#_303-区域和检索-数组不可变" aria-hidden="true">#</a> [303] 区域和检索 - 数组不可变</h2><h3 id="迭代求和" tabindex="-1"><a class="header-anchor" href="#迭代求和" aria-hidden="true">#</a> 迭代求和</h3><p>最容易想到的办法就是迭代累加求和，时间复杂度：构造函数为O(1)，区域和函数为O(n)；空间复杂度O(n)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">NumArray</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">NumArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>nums <span class="token operator">=</span> nums<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> sum<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="前缀和" tabindex="-1"><a class="header-anchor" href="#前缀和" aria-hidden="true">#</a> 前缀和</h3><p>由于题解中说到，最多调用 <code>10000</code> 次 <code>sumRange</code> 方法，所以主要时间耗费在<code>sumRange</code>上，因此在<code>NumArray</code>构造函数中使用动态规划来构造前缀和数组，这样问题就行sum[i, j]转化为sum[0, j] - sum[0, i]，实际上就是取两次前缀和相减，我们用<code>preSum[i]</code> 记录 <code>nums[0..i-1]</code> 的累加和</p><p><img src="https://user-images.githubusercontent.com/12841424/143686285-08cfcf8f-da1c-4991-a014-267a1e8c10c0.png" alt="image"></p><p>时间复杂度：构造函数为O(n)，区域和函数为O(1)；空间复杂度O(n)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">NumArray</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> preNums<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token class-name">NumArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 前缀和数组长度为n+1，是为了方便处理nums中第0位的前缀和</span>\n        preNums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// base case</span>\n        preNums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  \n        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preNums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">// 动态规划dp数组含义 dp[i] = dp[i - 1] + nums[i - 1]</span>\n            preNums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> preNums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sumRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> preNums<span class="token punctuation">[</span>right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> preNums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',9),e={},t=(0,a(3744).Z)(e,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);