/* ============================================================
   CARLY JO OETKER — main.js
   ============================================================ */

const IMG = (q)=>`https://source.unsplash.com/600x600/?${encodeURIComponent(q)}`;

const PRODUCTS = window.PRODUCTS || [];

/* ---------- Header / footer injection ---------- */
function buildHeader(active){
  return `<header class="site-header"><div class="container nav">
    <a href="index.html" class="logo"><span class="dot"></span> CARLY JO OETKER</a>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    <ul class="nav-links">
      <li><a href="index.html" ${active==='home'?'class="active"':''}>Home</a></li>
      <li><a href="products.html" ${active==='products'?'class="active"':''}>Products</a></li>
      <li><a href="about.html" ${active==='about'?'class="active"':''}>About Us</a></li>
      <li><a href="faq.html" ${active==='faq'?'class="active"':''}>FAQ</a></li>
      <li><a href="contact.html" ${active==='contact'?'class="active"':''}>Contact</a></li>
      <li><a href="cart.html" class="cart-link">Cart <span class="cart-badge" id="cartBadge">0</span></a></li>
    </ul>
  </div></header>`;
}
function buildFooter(){
  return `<footer><div class="container foot-grid">
    <div class="foot-brand">
      <div class="logo"><span class="dot"></span> CARLY JO OETKER</div>
      <p>Intelligent products for calmer, cleaner, more organized everyday kitchens.</p>
    </div>
    <div><h4>Explore</h4><ul>
      <li><a href="index.html">Home</a></li><li><a href="products.html">Products</a></li>
      <li><a href="about.html">About Us</a></li><li><a href="faq.html">FAQ</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul></div>
    <div><h4>Policies</h4><ul>
      <li><a href="privacy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms</a></li>
      <li><a href="cart.html">Cart</a></li>
    </ul></div>
    <div class="biz-info"><h4>Contact</h4>
      <p>CARLY JO OETKER<br>
      ellagracemoriera6sz@hotmail.com<br><br>
      West Grant Street 1 Marshalltown<br>
      Iowa 50158 United States of America<br>
      State<br><br>
      +1 7407101804</p>
    </div>
  </div>
  <div class="container copy">© 2026 CARLY JO OETKER. All rights reserved.</div>
  </footer>
  <div class="cookie" id="cookieBanner">
    <p>We use cookies to improve browsing experience and remember basic website preferences.</p>
    <div class="acts">
      <button class="btn btn-sm btn-ghost no-arrow" onclick="cookieChoice('declined')">Decline</button>
      <button class="btn btn-sm btn-primary no-arrow" onclick="cookieChoice('accepted')">Accept</button>
    </div>
  </div>`;
}

/* ---------- Cart ---------- */
const CART_KEY='carly_cart';
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateBadge()}
function updateBadge(){const el=document.getElementById('cartBadge');if(!el)return;const n=getCart().reduce((s,i)=>s+i.qty,0);el.textContent=n;el.style.display=n?'inline-flex':'none'}
function addToCart(id,qty=1){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const cart=getCart();const ex=cart.find(i=>i.id===id);
  if(ex)ex.qty+=qty;else cart.push({id,qty});
  saveCart(cart);toast(`Added "${p.name}" to cart`);
}
function toast(msg){
  let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.style.cssText='position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--graphite);color:var(--ceramic);padding:14px 24px;border-radius:999px;font-size:.88rem;z-index:300;opacity:0;transition:.3s;box-shadow:var(--shadow)';document.body.appendChild(t)}
  t.textContent=msg;requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)'});
  clearTimeout(t._t);t._t=setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(20px)'},2400);
}

/* ---------- Cookie ---------- */
function cookieChoice(v){localStorage.setItem('carly_cookie',v);document.getElementById('cookieBanner').classList.remove('show')}
function initCookie(){if(!localStorage.getItem('carly_cookie'))setTimeout(()=>document.getElementById('cookieBanner')?.classList.add('show'),1200)}

/* ---------- Product card ---------- */
function productCardHTML(p){
  return `<article class="product-card reveal">
    <div class="product-img"><span class="product-cat">${p.category}</span><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
    <div class="product-body">
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.shortDescription}</p>
      <div class="product-row"><span class="product-price">$${p.price.toFixed(2)}</span></div>
      <div class="product-actions">
        <button class="btn btn-dark no-arrow" onclick="addToCart(${p.id})">Add to Cart</button>
        <a class="btn btn-ghost no-arrow" href="product-detail.html?id=${p.id}">View Detail</a>
      </div>
    </div></article>`;
}

/* ---------- Products page ---------- */
let currentPage=1;const PER_PAGE=9;
function renderProductsPage(){
  const grid=document.getElementById('productsGrid');if(!grid)return;
  const start=(currentPage-1)*PER_PAGE;
  grid.innerHTML=PRODUCTS.slice(start,start+PER_PAGE).map(productCardHTML).join('');
  const pages=Math.ceil(PRODUCTS.length/PER_PAGE);
  const pag=document.getElementById('pagination');
  let html=`<button class="nav-btn" ${currentPage===1?'disabled':''} onclick="gotoPage(${currentPage-1})">← Prev</button>`;
  for(let i=1;i<=pages;i++)html+=`<button class="${i===currentPage?'active':''}" onclick="gotoPage(${i})">${i}</button>`;
  html+=`<button class="nav-btn" ${currentPage===pages?'disabled':''} onclick="gotoPage(${currentPage+1})">Next →</button>`;
  pag.innerHTML=html;observeReveal();
}
function gotoPage(n){currentPage=n;renderProductsPage();window.scrollTo({top:document.getElementById('productsGrid').offsetTop-120,behavior:'smooth'})}

/* ---------- Product detail ---------- */
function renderProductDetail(){
  const root=document.getElementById('productDetail');if(!root)return;
  const id=parseInt(new URLSearchParams(location.search).get('id'));
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p){root.innerHTML=`<div style="text-align:center;padding:80px 20px"><h2>Product not found</h2><p class="muted" style="margin:14px 0 24px">The product you're looking for is unavailable.</p><a class="btn btn-primary" href="products.html">Back to Products</a></div>`;return}
  const gallery = Array.isArray(p.images) && p.images.length ? p.images : [p.image];
    root.innerHTML=`
        <div class="pd-grid">
          <div class="pd-gallery">
            <div class="pd-image">
              <img id="pdMainImage" src="${gallery[0]}" alt="${p.name}">
            </div>

            <div class="pd-thumbs">
              ${gallery.map((img,index)=>`
                <button 
                  class="pd-thumb ${index===0?'active':''}" 
                  onclick="changeProductImage('${img}', this)"
                  type="button"
                >
                  <img src="${img}" alt="${p.name} ${index+1}">
                </button>
              `).join('')}
            </div>
          </div>

          <div>
        <div class="pd-cat">${p.category}</div>
        <h1 style="font-size:2.6rem">${p.name}</h1>
        <div class="pd-price">$${p.price.toFixed(2)}</div>
        <p class="pd-desc">${p.longDescription}</p>
        <div class="qty-row">
          <div class="qty-control">
            <button onclick="changeQty(-1)">−</button>
            <input id="pdQty" value="1" readonly>
            <button onclick="changeQty(1)">+</button>
          </div>
        </div>
        <div class="pd-actions">
          <button class="btn btn-primary no-arrow" onclick="pdAdd(${p.id})">Add to Cart</button>
          <button class="btn btn-ghost no-arrow" onclick="pdContact(${p.id})">Contact Us</button>
        </div>
        <div class="pd-section"><h4>Key Features</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>
        <div class="pd-section"><h4>Suggested Usage</h4><p>${p.usage}</p></div>
        <div class="pd-section"><h4>Material & Care</h4><p>${p.careNotes}</p></div>
      </div>
    </div>
    <section style="padding:90px 0 0"><h2 class="serif" style="margin-bottom:10px">You may also like</h2>
      <div class="products-grid">${PRODUCTS.filter(x=>x.id!==p.id).slice(0,3).map(productCardHTML).join('')}</div>
    </section>`;
  observeReveal();
}
function changeQty(d){const i=document.getElementById('pdQty');i.value=Math.max(1,parseInt(i.value)+d)}
function pdAdd(id){addToCart(id,parseInt(document.getElementById('pdQty').value))}
function pdContact(id){
  const p=PRODUCTS.find(x=>x.id===id);const q=document.getElementById('pdQty').value;
  const msg=`Hello, I am interested in this product:\nProduct: ${p.name}\nCategory: ${p.category}\nPrice: $${p.price.toFixed(2)}\nQuantity: ${q}\nPlease send me more information.`;
  localStorage.setItem('contactMessage',msg);location.href='contact.html';

function changeProductImage(src, btn){
  const main = document.getElementById('pdMainImage');
  if(!main) return;

  main.src = src;

  document.querySelectorAll('.pd-thumb').forEach(item=>{
    item.classList.remove('active');
  });

  btn.classList.add('active');
}
}

/* ---------- Cart page ---------- */
function renderCart(){
  const root=document.getElementById('cartRoot');if(!root)return;
  const cart=getCart();
  if(!cart.length){root.innerHTML=`<div class="empty-cart"><h3 class="serif">Your cart is empty</h3><p class="muted" style="margin:10px 0 24px">Discover our smart kitchen essentials.</p><a class="btn btn-primary" href="products.html">Browse Products</a></div>`;return}
  const items=cart.map(c=>({...PRODUCTS.find(p=>p.id===c.id),qty:c.qty}));
  const total=items.reduce((s,i)=>s+i.price*i.qty,0);
  root.innerHTML=`<div class="cart-wrap">
    <div class="cart-items">
      ${items.map(i=>`<div class="cart-row">
        <img src="${i.image}" alt="${i.name}">
        <div class="cart-info"><small>${i.category}</small><h4>${i.name}</h4><div class="price">$${i.price.toFixed(2)}</div>
          <div class="qty-control" style="margin-top:10px;width:fit-content">
            <button onclick="cartQty(${i.id},-1)">−</button>
            <input value="${i.qty}" readonly>
            <button onclick="cartQty(${i.id},1)">+</button>
          </div>
        </div>
        <div class="cart-controls"><span class="subt">$${(i.price*i.qty).toFixed(2)}</span><button class="remove-btn" onclick="cartRemove(${i.id})">Remove</button></div>
      </div>`).join('')}
    </div>
    <aside class="cart-summary">
      <h3>Order Summary</h3>
      ${items.map(i=>`<div class="line"><span>${i.name} × ${i.qty}</span><span>$${(i.price*i.qty).toFixed(2)}</span></div>`).join('')}
      <div class="total"><small>Estimated Total</small><span>$${total.toFixed(2)}</span></div>
      <div class="btns">
        <a class="btn btn-primary no-arrow" href="checkout.html">Checkout</a>
        <a class="btn btn-ghost no-arrow" href="products.html">Continue Shopping</a>
      </div>
      <p class="muted" style="font-size:.78rem;margin-top:18px;opacity:.7">Inquiries are handled personally. No online payment is processed on this website.</p>
    </aside>
  </div>`;
}
function cartQty(id,d){const c=getCart();const it=c.find(x=>x.id===id);if(!it)return;it.qty=Math.max(1,it.qty+d);saveCart(c);renderCart()}
function cartRemove(id){saveCart(getCart().filter(x=>x.id!==id));renderCart()}
function cartContact(){
  const cart=getCart();if(!cart.length){location.href='contact.html';return}
  const items=cart.map(c=>({...PRODUCTS.find(p=>p.id===c.id),qty:c.qty}));
  const total=items.reduce((s,i)=>s+i.price*i.qty,0);
  const lines=items.map(i=>`${i.name} - ${i.category} - $${i.price.toFixed(2)} - Qty: ${i.qty}`).join('\n');
  const msg=`Hello, I would like to ask about the following products:\n\n${lines}\n\nEstimated total: $${total.toFixed(2)}\nPlease contact me with more details.`;
  localStorage.setItem('contactMessage',msg);location.href='contact.html';
}

/* ---------- Checkout page ---------- */
function renderCheckout(){
  const root = document.getElementById('checkoutRoot');
  if(!root) return;

  const cart = getCart();

  if(!cart.length){
    root.innerHTML = `
      <div class="empty-cart">
        <h3 class="serif">Your cart is empty</h3>
        <p class="muted" style="margin:10px 0 24px">
          Please add products before checkout.
        </p>
        <a class="btn btn-primary" href="products.html">Browse Products</a>
      </div>
    `;
    return;
  }

  const items = cart
    .map(c => {
      const p = PRODUCTS.find(x => Number(x.id) === Number(c.id));
      if(!p) return null;

      return {
        ...p,
        qty: Number(c.qty) || 1
      };
    })
    .filter(Boolean);

  if(!items.length){
    root.innerHTML = `
      <div class="empty-cart">
        <h3 class="serif">Product data not found</h3>
        <p class="muted" style="margin:10px 0 24px">
          Cart exists, but product data is not loaded correctly.
        </p>
        <a class="btn btn-primary" href="cart.html">Back to Cart</a>
      </div>
    `;
    return;
  }

  const total = items.reduce((s,i) => s + i.price * i.qty, 0);

  root.innerHTML = `
    <div class="checkout-wrap">
      <form class="checkout-form-card" id="checkoutForm">
        <div class="success-msg" id="checkoutSuccess">
          Your order has been submitted successfully.
        </div>

        <h2 class="serif checkout-title">Checkout</h2>

        <div class="form-grid">
          <div class="field">
            <label>Full Name</label>
            <input type="text" required>
          </div>

          <div class="field">
            <label>Email</label>
            <input type="email" required>
          </div>

          <div class="field">
            <label>Phone</label>
            <input type="tel" required>
          </div>

          <div class="field">
            <label>City / State</label>
            <input type="text" required>
          </div>

          <div class="field full">
            <label>Shipping Address</label>
            <input type="text" required>
          </div>

          <div class="field full">
            <label>Order Note</label>
            <textarea placeholder="Any note about delivery or product request..."></textarea>
          </div>
        </div>

        <div class="payment-section">
          <h3>Payment Method</h3>

          <div class="payment-options">
            <label class="payment-option active" data-payment="order">
              <input type="radio" name="paymentMethod" value="order" checked>
              <span>
                <strong>Order First</strong>
                <small>Submit order first. We will contact you to confirm details.</small>
              </span>
            </label>

            <label class="payment-option" data-payment="paypal">
              <input type="radio" name="paymentMethod" value="paypal">
              <span>
                <strong>PayPal</strong>
                <small>Continue with PayPal official checkout.</small>
              </span>
            </label>
          </div>

          <div class="payment-panel show" id="orderPanel">
            <p>
              Your order will be submitted first. We will contact you to confirm availability,
              shipping details, and payment arrangement.
            </p>
          </div>

          <div class="payment-panel" id="paypalPanel">
            <div class="paypal-box">
              <div class="paypal-logo">PayPal</div>

              <p>
                Please continue with the official PayPal button below. You will log in directly through PayPal.
                This website does not collect or store your PayPal password.
              </p>

              <div id="paypalButtonContainer"></div>

              <p class="checkout-safe-note">
                After PayPal payment is completed, your cart will be cleared and you will be redirected to the thank you page.
              </p>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary no-arrow checkout-submit" id="checkoutSubmitBtn">
          Place Order
        </button>
      </form>

      <aside class="checkout-summary">
        <h3>Order Summary</h3>

        <div class="checkout-items">
          ${items.map(i => `
            <div class="checkout-item">
              <img src="${i.image}" alt="${i.name}">
              <div>
                <strong>${i.name}</strong>
                <small>${i.category}</small>
                <span>$${i.price.toFixed(2)} × ${i.qty}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="checkout-total">
          <span>Estimated Total</span>
          <strong>$${total.toFixed(2)}</strong>
        </div>

        <a href="cart.html" class="btn btn-ghost no-arrow checkout-back">
          Back to Cart
        </a>
      </aside>
    </div>
  `;

  initCheckoutEvents(total);
}

function initCheckoutEvents(total){
  const radios = document.querySelectorAll('input[name="paymentMethod"]');
  const options = document.querySelectorAll('.payment-option');
  const submitBtn = document.getElementById('checkoutSubmitBtn');

  radios.forEach(radio=>{
    radio.addEventListener('change',()=>{
      const value = radio.value;

      options.forEach(option=>{
        option.classList.toggle('active', option.dataset.payment === value);
      });

      document.getElementById('orderPanel')?.classList.toggle('show', value === 'order');
      document.getElementById('paypalPanel')?.classList.toggle('show', value === 'paypal');

      if(value === 'paypal'){
        if(submitBtn) submitBtn.style.display = 'none';
        renderPaypalButton(total);
      }

      if(value === 'order'){
        if(submitBtn) submitBtn.style.display = 'inline-flex';
      }
    });
  });

  const form = document.getElementById('checkoutForm');
  if(!form) return;

  form.addEventListener('submit', e=>{
    e.preventDefault();

    const selectedPayment =
      document.querySelector('input[name="paymentMethod"]:checked')?.value || 'order';

    if(selectedPayment === 'paypal'){
      toast('Please use the PayPal button to continue.');
      return;
    }

    const success = document.getElementById('checkoutSuccess');

    if(success){
      success.textContent = 'Your order has been submitted successfully. Redirecting...';
      success.classList.add('show');
    }

    localStorage.setItem('lastPaymentMethod', 'order');
    localStorage.removeItem('lastOrderRef');
    localStorage.removeItem(CART_KEY);
    updateBadge();

    form.reset();

    setTimeout(()=>{
      location.href = 'thank.html?method=order';
    }, 900);
  });
}

function renderPaypalButton(total){
  const container = document.getElementById('paypalButtonContainer');
  if(!container) return;

  container.innerHTML = '';

  if(!window.paypal){
    container.innerHTML = `
      <div class="paypal-error">
        PayPal is not loaded. Please check the PayPal SDK script in checkout.html.
      </div>
    `;
    return;
  }

  paypal.Buttons({
    fundingSource: paypal.FUNDING.PAYPAL,
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'pill',
      label: 'paypal'
    },

    createOrder: function(data, actions){
      return actions.order.create({
        purchase_units: [
          {
            description: 'Kitchen Products Order',
            amount: {
              currency_code: 'USD',
              value: total.toFixed(2)
            }
          }
        ]
      });
    },

    onApprove: function(data, actions){
      return actions.order.capture().then(function(details){
        localStorage.setItem('lastPaymentMethod', 'paypal');
        localStorage.removeItem('lastOrderRef');
        localStorage.removeItem(CART_KEY);

        updateBadge();

        const success = document.getElementById('checkoutSuccess');
        if(success){
          success.textContent = 'PayPal payment completed successfully. Redirecting...';
          success.classList.add('show');
        }

        setTimeout(()=>{
          location.href = 'thank.html?method=paypal';
        }, 900);
      });
    },

    onCancel: function(){
      toast('PayPal payment was cancelled.');
    },

    onError: function(err){
      console.error(err);
      toast('PayPal payment could not be completed.');
    }
  }).render('#paypalButtonContainer');
}

/* ---------- Thank You page ---------- */
function renderThankPage(){
  const root = document.getElementById('thankRoot');
  if(!root) return;

  const params = new URLSearchParams(location.search);
  const method = params.get('method') || localStorage.getItem('lastPaymentMethod') || 'order';

  const thankData = {
    order: {
      label: 'Order Submitted',
      title: 'Your order request has been submitted.',
      text: 'Thank you for your order request. We will review your selected products and contact you soon to confirm availability, shipping details, and final arrangement.',
      badge: 'ORDER REQUEST'
    },
    paypal: {
      label: 'PayPal Payment Completed',
      title: 'Your PayPal payment has been completed.',
      text: 'Thank you for your order. Your payment was processed through PayPal and your order request has been received successfully.',
      badge: 'PAYPAL PAYMENT'
    }
  };
  const data = thankData[method] || thankData.order;

  root.innerHTML = `
    <div class="thank-card">
      <div class="thank-icon">✓</div>
      <span class="thank-badge">${data.badge}</span>
      <h2>${data.title}</h2>
      <p>${data.text}</p>

      <div class="thank-info-grid">
        <div>
          <small>Status</small>
          <strong>${data.label}</strong>
        </div>
        <div>
          <small>Reference</small>
          <strong>${generateOrderRef()}</strong>
        </div>
        <div>
          <small>Next Step</small>
          <strong>Contact Confirmation</strong>
        </div>
      </div>

      <div class="thank-actions">
        <a href="products.html" class="btn btn-primary no-arrow">Continue Shopping</a>
        <a href="index.html" class="btn btn-ghost no-arrow">Back to Home</a>
      </div>
    </div>
  `;
}

function generateOrderRef(){
  let ref = localStorage.getItem('lastOrderRef');

  if(!ref){
    const now = Date.now().toString().slice(-6);
    const random = Math.floor(100 + Math.random() * 900);
    ref = `CSK-${now}-${random}`;
    localStorage.setItem('lastOrderRef', ref);
  }

  return ref;
}

/* ---------- Contact ---------- */
function getCartPreviewItems(){
  return getCart()
    .map(c=>{
      const p=PRODUCTS.find(x=>x.id===c.id);
      if(!p) return null;
      return {...p, qty:c.qty};
    })
    .filter(Boolean);
}

function buildCartInquiryMessage(items){
  const total=items.reduce((s,i)=>s+i.price*i.qty,0);

  const lines=items.map((i,index)=>
    `${index+1}. ${i.name} - ${i.category} - $${i.price.toFixed(2)} - Qty: ${i.qty}`
  ).join('\n');

  return `Hello, I would like to ask about the following products:\n\n${lines}\n\nEstimated total: $${total.toFixed(2)}\nPlease contact me with more details.`;
}

function renderContactCartPreview(){
  const box=document.getElementById('contactProductPreview');
  if(!box) return;

  const items=getCartPreviewItems();

  if(!items.length){
    box.innerHTML='';
    box.classList.remove('show');
    return;
  }

  const maxVisible=2;
  const visibleItems=items.slice(0,maxVisible);
  const hiddenCount=items.length-maxVisible;
  const total=items.reduce((s,i)=>s+i.price*i.qty,0);

  box.classList.add('show');

  box.innerHTML=`
    <div class="contact-preview-head">
      <div>
        <span class="mini-label">Selected products from cart</span>
        <h4>${items.length} product${items.length>1?'s':''} selected</h4>
      </div>

      ${hiddenCount>0
        ? `<a href="cart.html" class="preview-view-all">View all ${items.length}</a>`
        : `<a href="cart.html" class="preview-view-all">Back to cart</a>`
      }
    </div>

    <div class="contact-preview-list">
      ${visibleItems.map(i=>`
        <div class="contact-preview-item">
          <img src="${i.image}" alt="${i.name}">
          <div class="contact-preview-info">
            <strong>${i.name}</strong>
            <small>${i.category}</small>
            <span>$${i.price.toFixed(2)} × ${i.qty}</span>
          </div>
        </div>
      `).join('')}

      ${hiddenCount>0
        ? `<div class="contact-preview-more">
            +${hiddenCount} more product${hiddenCount>1?'s':''} hidden.
            <a href="cart.html">View all in cart</a>
          </div>`
        : ''
      }
    </div>

    <div class="contact-preview-total">
      <span>Estimated total</span>
      <strong>$${total.toFixed(2)}</strong>
    </div>
  `;
}

function hideContactCartPreview(){
  const box=document.getElementById('contactProductPreview');
  if(!box) return;

  box.innerHTML='';
  box.classList.remove('show');
}

function setInquiryType(type, updateMessage=true){
  const ta=document.getElementById('messageField');
  const options=document.querySelectorAll('.inquiry-option');
  const radios=document.querySelectorAll('input[name="inquiryType"]');

  radios.forEach(r=>{
    r.checked=r.value===type;
  });

  options.forEach(option=>{
    option.classList.toggle('active', option.dataset.type===type);
  });

  if(type==='product'){
    const items=getCartPreviewItems();

    if(items.length){
      renderContactCartPreview();

      localStorage.setItem('contactSource','cart');
      localStorage.setItem('clearCartAfterSend','true');

      if(updateMessage && ta){
        ta.value=buildCartInquiryMessage(items);
      }
    }else{
      hideContactCartPreview();

      if(updateMessage && ta){
        ta.value='';
        ta.placeholder='Tell us how we can help...';
      }
    }
  }

  if(type==='general'){
    hideContactCartPreview();

    localStorage.setItem('contactSource','general');
    localStorage.removeItem('clearCartAfterSend');

    if(updateMessage && ta){
      ta.value='';
      ta.placeholder='Tell us how we can help...';
    }
  }
}

function initContact(){
  const ta=document.getElementById('messageField');
  if(!ta) return;

  const stored=localStorage.getItem('contactMessage');
  const source=localStorage.getItem('contactSource');
  const cartItems=getCartPreviewItems();

  if(stored){
    ta.value=stored;
    localStorage.removeItem('contactMessage');
  }

  const defaultType=
    source==='cart' && cartItems.length
      ? 'product'
      : 'general';

  setInquiryType(defaultType,false);

  document.querySelectorAll('input[name="inquiryType"]').forEach(radio=>{
    radio.addEventListener('change',()=>{
      setInquiryType(radio.value,true);
    });
  });

  const form=document.getElementById('contactForm');

  form.addEventListener('submit',e=>{
    e.preventDefault();

    const selectedType=
      document.querySelector('input[name="inquiryType"]:checked')?.value || 'general';

    const shouldClearCart=
      selectedType==='product' &&
      localStorage.getItem('contactSource')==='cart' &&
      localStorage.getItem('clearCartAfterSend')==='true';

    document.getElementById('successMsg').classList.add('show');

    if(shouldClearCart){
      localStorage.removeItem(CART_KEY);
      localStorage.removeItem('contactSource');
      localStorage.removeItem('clearCartAfterSend');
      updateBadge();
      hideContactCartPreview();
    }

    form.reset();

    if(shouldClearCart){
      setInquiryType('general',false);
    }

    window.scrollTo({
      top:form.offsetTop-120,
      behavior:'smooth'
    });
  });
}

/* ---------- FAQ ---------- */
function initFAQ(){
  document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{b.parentElement.classList.toggle('open')}));
}

/* ---------- Reveal ---------- */
let _io;
function observeReveal(){
  if(!_io)_io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');_io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>_io.observe(el));
}

/* ---------- Init ---------- */
function injectHeaderFooter(active){
  document.body.insertAdjacentHTML('afterbegin',buildHeader(active));
  document.body.insertAdjacentHTML('beforeend',buildFooter());
  const ham=document.querySelector('.hamburger');const nav=document.querySelector('.nav-links');
  ham?.addEventListener('click',()=>{ham.classList.toggle('open');nav.classList.toggle('open')});
  window.addEventListener('scroll',()=>{document.querySelector('.site-header').classList.toggle('scrolled',scrollY>20)});
  updateBadge();initCookie();
}

window.addEventListener('DOMContentLoaded',()=>{
  const page=document.body.dataset.page;
  injectHeaderFooter(page);
  if(page==='home'){
    // featured strip
    const f=document.getElementById('featuredStrip');
    if(f)f.innerHTML=[1,3,8,12].map(id=>productCardHTML(PRODUCTS.find(p=>p.id===id))).join('');
  }
  if(page==='products')renderProductsPage();
  if(page==='product-detail')renderProductDetail();
  if(page==='cart')renderCart();
  if(page==='checkout')renderCheckout();
  if(page==='thank')renderThankPage();
  if(page==='contact')initContact();
  if(page==='faq')initFAQ();
  observeReveal();
  setTimeout(()=>document.querySelector('.page-loader')?.classList.add('hide'),350);
});
