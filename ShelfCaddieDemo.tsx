import { useState } from "react";

// ── LEGACY GOLF CLUB DATA ────────────────────────────────────────────────────

const BALLS_DATA = [
  { description:"Taylormade Tour Response", vendor:"TAYLORMADE", qty_sold:287, amount:3415.65, cost:2412.63, margin:29.37, units_on_hand:42 },
  { description:"Taylormade TP5/5X Sleeve", vendor:"TAYLORMADE", qty_sold:307, amount:4259.65, cost:3195.10, margin:24.99, units_on_hand:38 },
  { description:"Callaway Chrome Tour", vendor:"CALLAWAY", qty_sold:125, amount:1748.75, cost:1290.00, margin:26.23, units_on_hand:84 },
  { description:"Srixon Q Star Tour", vendor:"SRIXON", qty_sold:314, amount:3433.74, cost:1912.46, margin:44.30, units_on_hand:22 },
  { description:"Srixon Ultispeed Sleeve", vendor:"SRIXON", qty_sold:13, amount:129.87, cost:58.50, margin:54.95, units_on_hand:96 },
  { description:"Callaway Chrome Soft", vendor:"CALLAWAY", qty_sold:202, amount:2812.78, cost:2084.64, margin:25.89, units_on_hand:48 },
  { description:"Callaway Supersoft Sleeve", vendor:"CALLAWAY", qty_sold:1664, amount:13179.04, cost:7797.07, margin:40.84, units_on_hand:156 },
  { description:"Callaway ERC Soft Sleeve", vendor:"CALLAWAY", qty_sold:131, amount:1308.69, cost:979.88, margin:25.13, units_on_hand:72 },
  { description:"Srixon Q-Star", vendor:"SRIXON", qty_sold:134, amount:1283.70, cost:623.10, margin:51.46, units_on_hand:36 },
  { description:"Srixon Soft Feel", vendor:"SRIXON", qty_sold:1088, amount:7859.28, cost:4080.00, margin:48.09, units_on_hand:144 },
  { description:"Srixon Z Star", vendor:"SRIXON", qty_sold:17, amount:183.71, cost:109.07, margin:40.63, units_on_hand:108 },
  { description:"Titleist Trufeel", vendor:"TITLEIST", qty_sold:268, amount:2081.12, cost:1248.88, margin:39.99, units_on_hand:60 },
  { description:"Titleist Tour Soft Sleeve", vendor:"TITLEIST", qty_sold:204, amount:2031.92, cost:1474.92, margin:27.41, units_on_hand:54 },
  { description:"Titleist Velocity Sleeve", vendor:"TITLEIST", qty_sold:239, amount:2092.94, cost:1316.89, margin:37.08, units_on_hand:48 },
  { description:"Titleist AVX Sleeve", vendor:"TITLEIST", qty_sold:105, amount:1331.74, cost:971.25, margin:27.07, units_on_hand:120 },
  { description:"Titleist Pro V1/V1X", vendor:"TITLEIST", qty_sold:299, amount:4402.00, cost:3037.84, margin:30.99, units_on_hand:36 },
  { description:"Pinnacle 15 Ball Box", vendor:"PINNACLE", qty_sold:284, amount:6618.80, cost:4034.66, margin:39.04, units_on_hand:48 },
  { description:"Pinnacle 15 Ball Box (Alt)", vendor:"PINNACLE", qty_sold:13, amount:286.00, cost:178.36, margin:37.64, units_on_hand:144 },
  { description:"Taylormade Jar Ball Tour Response", vendor:"TAYLORMADE", qty_sold:192, amount:766.08, cost:180.60, margin:76.43, units_on_hand:24 },
  { description:"Taylormade Speed Soft", vendor:"TAYLORMADE", qty_sold:118, amount:1178.82, cost:622.06, margin:47.23, units_on_hand:60 },
  { description:"Noodle 15 Ball Pack", vendor:"NOODLE", qty_sold:135, amount:3046.88, cost:2193.75, margin:28.00, units_on_hand:72 },
];

const GLOVES_DATA = [
  { description:"Callaway Rain Glove 2 Pack", vendor:"CALLAWAY", qty_sold:2, amount:51.98, cost:30.10, margin:42.09, units_on_hand:48 },
  { description:"Footjoy Soft Joy Glove", vendor:"FOOTJOY", qty_sold:190, amount:3217.90, cost:1900.36, margin:40.94, units_on_hand:84 },
  { description:"Taylor Made Flex Glove", vendor:"TAYLORMADE", qty_sold:57, amount:911.43, cost:564.30, margin:38.09, units_on_hand:120 },
  { description:"Callaway Tour Glove", vendor:"CALLAWAY", qty_sold:153, amount:3048.47, cost:2282.11, margin:25.14, units_on_hand:96 },
  { description:"Callaway Tour Glove (Alt)", vendor:"CALLAWAY", qty_sold:14, amount:279.86, cost:204.68, margin:26.86, units_on_hand:144 },
  { description:"Callaway Weather Spann Glove", vendor:"CALLAWAY", qty_sold:360, amount:4675.10, cost:2950.78, margin:36.88, units_on_hand:72 },
  { description:"Callaway Weather Glove", vendor:"CALLAWAY", qty_sold:16, amount:207.84, cost:130.72, margin:37.11, units_on_hand:168 },
  { description:"Srixon Gloves", vendor:"SRIXON", qty_sold:139, amount:1661.81, cost:539.68, margin:67.52, units_on_hand:36 },
  { description:"Srixon All Weather", vendor:"SRIXON", qty_sold:1, amount:11.99, cost:2.25, margin:81.23, units_on_hand:96 },
  { description:"Footjoy Weathersof Glove 2 Pack", vendor:"FOOTJOY", qty_sold:56, amount:1115.44, cost:699.60, margin:37.28, units_on_hand:108 },
  { description:"Footjoy Weathersof Glove Singles", vendor:"FOOTJOY", qty_sold:313, amount:4064.57, cost:2343.02, margin:42.36, units_on_hand:48 },
  { description:"Footjoy Junior Gloves Singles", vendor:"FOOTJOY", qty_sold:35, amount:345.65, cost:175.00, margin:49.37, units_on_hand:132 },
  { description:"Footjoy Raingrip Gloves Pair", vendor:"FOOTJOY", qty_sold:7, amount:133.93, cost:94.50, margin:29.44, units_on_hand:84 },
  { description:"Foot Joy Contour Flex Glove", vendor:"FOOTJOY", qty_sold:22, amount:373.78, cost:187.00, margin:49.97, units_on_hand:60 },
];

const BAGS_DATA = [
  { description:"Callaway NEW Stand Bag", vendor:"CALLAWAY", qty_sold:1, amount:299.99, cost:180.60, margin:39.80, units_on_hand:4 },
  { description:"Callaway NEW LightWeight Bag", vendor:"CALLAWAY", qty_sold:1, amount:215.99, cost:129.00, margin:40.28, units_on_hand:3 },
];

function analyzeItem(item, totalQty) {
  const velocity = item.qty_sold / 12; // monthly velocity (full year)
  const monthsRemaining = velocity > 0 ? item.units_on_hand / velocity : Infinity;
  const shareOfCategory = ((item.qty_sold / totalQty) * 100).toFixed(1);

  let status, statusLabel;
  if (item.qty_sold <= 2) { status = "dead"; statusLabel = "Dead Stock"; }
  else if (monthsRemaining >= 8 || (item.qty_sold < 20 && item.units_on_hand > 60)) { status = "risk"; statusLabel = "At Risk"; }
  else if (monthsRemaining >= 4) { status = "watch"; statusLabel = "Watch"; }
  else { status = "healthy"; statusLabel = "Healthy"; }

  return { ...item, velocity: Math.round(velocity * 10) / 10, monthsRemaining: monthsRemaining === Infinity ? "∞" : Math.round(monthsRemaining * 10) / 10, shareOfCategory, status, statusLabel };
}

const VENDOR_COLORS = {
  CALLAWAY:"#1a3a5c", TITLEIST:"#8b1a1a", TAYLORMADE:"#1a4a2e",
  SRIXON:"#4a2a00", FOOTJOY:"#2a1a5c", PINNACLE:"#3a3a1a", NOODLE:"#1a3a3a"
};

function StatusBadge({ status, label }) {
  const styles = {
    dead:    { bg:"#1a0000", border:"#ff2222", color:"#ff6666", dot:"#ff2222" },
    risk:    { bg:"#1a0a00", border:"#ff8800", color:"#ffaa44", dot:"#ff8800" },
    watch:   { bg:"#1a1a00", border:"#ddcc00", color:"#eedc44", dot:"#ddcc00" },
    healthy: { bg:"#001a08", border:"#22cc66", color:"#44ee88", dot:"#22cc66" },
  };
  const s = styles[status];
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:5,
      background:s.bg, border:`1px solid ${s.border}`,
      color:s.color, borderRadius:20, padding:"3px 10px",
      fontSize:10, fontFamily:"'DM Mono',monospace", fontWeight:600,
      letterSpacing:1, textTransform:"uppercase", whiteSpace:"nowrap"
    }}>
      <span style={{width:5,height:5,borderRadius:"50%",background:s.dot,flexShrink:0}}/>
      {label}
    </span>
  );
}

function StatCard({ label, value, color, sub }) {
  return (
    <div style={{
      background:"#0d0d0d", border:"1px solid #1e1e1e",
      borderRadius:12, padding:"18px 22px",
      display:"flex", flexDirection:"column", gap:4
    }}>
      <div style={{fontSize:10,color:"#555",fontFamily:"'DM Mono',monospace",letterSpacing:2,textTransform:"uppercase"}}>{label}</div>
      <div style={{fontSize:32,fontWeight:800,color,fontFamily:"'Playfair Display',serif",lineHeight:1}}>{value}</div>
      {sub && <div style={{fontSize:10,color:"#444",fontFamily:"'DM Mono',monospace"}}>{sub}</div>}
    </div>
  );
}

function Table({ items }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [vendorFilter, setVendorFilter] = useState("all");

  const vendors = ["all", ...Array.from(new Set(items.map(d => d.vendor)))];
  const statusOrder = { dead:0, risk:1, watch:2, healthy:3 };

  const filtered = items
    .filter(d => filter === "all" || d.status === filter)
    .filter(d => vendorFilter === "all" || d.vendor === vendorFilter)
    .sort((a,b) => statusOrder[a.status] - statusOrder[b.status]);

  const counts = {
    dead: items.filter(d => d.status === "dead").length,
    risk: items.filter(d => d.status === "risk").length,
    watch: items.filter(d => d.status === "watch").length,
    healthy: items.filter(d => d.status === "healthy").length,
  };

  const totalSales = items.reduce((a,b) => a + b.amount, 0);
  const avgMargin = (items.reduce((a,b) => a + b.margin, 0) / items.length).toFixed(1);
  const totalUnits = items.reduce((a,b) => a + b.qty_sold, 0);

  const sel = selected ? items.find(d => d.description === selected) : null;

  return (
    <div>
      {/* Stat Cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:24}}>
        <StatCard label="Dead Stock" value={counts.dead} color="#ff4444" sub="Needs action"/>
        <StatCard label="At Risk" value={counts.risk} color="#ff8800" sub="Over stocked"/>
        <StatCard label="Watch List" value={counts.watch} color="#ddcc00" sub="Slowing"/>
        <StatCard label="Healthy" value={counts.healthy} color="#22cc66" sub="Moving well"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:24}}>
        <StatCard label="Total Revenue" value={`$${totalSales.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`} color="#4a9eff" sub="Full year 2025"/>
        <StatCard label="Units Sold" value={totalUnits.toLocaleString()} color="#aa77ff" sub="Full year 2025"/>
        <StatCard label="Avg Margin" value={`${avgMargin}%`} color="#22cc66" sub="Blended margin"/>
      </div>

      {/* Filters */}
      <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
        {[{key:"all",label:"All"},{key:"dead",label:"🔴 Dead"},{key:"risk",label:"🟠 At Risk"},{key:"watch",label:"🟡 Watch"},{key:"healthy",label:"🟢 Healthy"}].map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{
            background:filter===f.key?"#1e1e1e":"transparent",
            border:filter===f.key?"1px solid #333":"1px solid #1a1a1a",
            color:filter===f.key?"#fff":"#555",
            borderRadius:8,padding:"5px 12px",fontSize:11,cursor:"pointer",
            fontFamily:"'DM Mono',monospace",letterSpacing:0.5
          }}>{f.label}</button>
        ))}
        <select value={vendorFilter} onChange={e=>setVendorFilter(e.target.value)} style={{
          background:"#0d0d0d",border:"1px solid #1e1e1e",color:"#aaa",
          borderRadius:8,padding:"5px 10px",fontSize:11,cursor:"pointer",
          fontFamily:"'DM Mono',monospace"
        }}>
          {vendors.map(v=><option key={v} value={v}>{v==="all"?"All Vendors":v}</option>)}
        </select>
      </div>

      {/* Table */}
      <div style={{background:"#0a0a0a",border:"1px solid #1a1a1a",borderRadius:12,overflow:"hidden"}}>
        <div style={{
          display:"grid",gridTemplateColumns:"140px 1fr 110px 70px 80px 80px 80px 70px",
          padding:"10px 16px",background:"#0d0d0d",borderBottom:"1px solid #1a1a1a",
          fontSize:9,color:"#444",fontFamily:"'DM Mono',monospace",letterSpacing:1.5,textTransform:"uppercase"
        }}>
          <span>Vendor</span><span>Description</span><span>Status</span>
          <span style={{textAlign:"right"}}>Sold</span>
          <span style={{textAlign:"right"}}>On Hand</span>
          <span style={{textAlign:"right"}}>Velocity</span>
          <span style={{textAlign:"right"}}>Months Left</span>
          <span style={{textAlign:"right"}}>Margin</span>
        </div>

        {filtered.map((item,i) => (
          <div key={item.description}>
            <div onClick={() => setSelected(selected===item.description?null:item.description)} style={{
              display:"grid",gridTemplateColumns:"140px 1fr 110px 70px 80px 80px 80px 70px",
              padding:"12px 16px",
              borderBottom:i<filtered.length-1?"1px solid #111":"none",
              background:selected===item.description?"#111":i%2===0?"#0a0a0a":"#0c0c0c",
              cursor:"pointer",alignItems:"center"
            }}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:6,height:6,borderRadius:2,background:VENDOR_COLORS[item.vendor]||"#333",flexShrink:0}}/>
                <span style={{fontSize:10,color:"#555",fontFamily:"'DM Mono',monospace"}}>{item.vendor}</span>
              </div>
              <div style={{fontSize:12,color:"#ddd",fontWeight:500,paddingRight:12}}>{item.description}</div>
              <div><StatusBadge status={item.status} label={item.statusLabel}/></div>
              <div style={{textAlign:"right",fontSize:13,fontWeight:600,color:"#eee",fontFamily:"'DM Mono',monospace"}}>{item.qty_sold}</div>
              <div style={{textAlign:"right",fontSize:13,color:"#888",fontFamily:"'DM Mono',monospace"}}>{item.units_on_hand}</div>
              <div style={{textAlign:"right",fontSize:12,color:"#666",fontFamily:"'DM Mono',monospace"}}>{item.velocity}/mo</div>
              <div style={{textAlign:"right",fontSize:13,fontWeight:600,fontFamily:"'DM Mono',monospace",
                color:item.monthsRemaining==="∞"?"#ff4444":typeof item.monthsRemaining==="number"&&item.monthsRemaining>=8?"#ff8800":item.monthsRemaining>=4?"#ddcc00":"#22cc66"
              }}>{item.monthsRemaining==="∞"?"∞":`${item.monthsRemaining}mo`}</div>
              <div style={{textAlign:"right",fontSize:12,color:"#22cc66",fontFamily:"'DM Mono',monospace"}}>{item.margin}%</div>
            </div>

            {selected===item.description && (
              <div style={{padding:"20px 24px",background:"#0f0f0f",borderBottom:"1px solid #1a1a1a"}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:16}}>
                  {[
                    {label:"Units Sold (2025)",value:item.qty_sold},
                    {label:"Revenue",value:`$${item.amount.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`},
                    {label:"Margin",value:`${item.margin}%`},
                    {label:"Share of Category",value:`${item.shareOfCategory}%`},
                  ].map(s=>(
                    <div key={s.label} style={{background:"#0a0a0a",border:"1px solid #1a1a1a",borderRadius:8,padding:"12px 16px"}}>
                      <div style={{fontSize:9,color:"#444",fontFamily:"'DM Mono',monospace",letterSpacing:1,marginBottom:4}}>{s.label}</div>
                      <div style={{fontSize:20,fontWeight:700,fontFamily:"'Playfair Display',serif"}}>{s.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  padding:"14px 18px",borderRadius:10,
                  background:item.status==="dead"?"#1a0000":item.status==="risk"?"#1a0a00":item.status==="watch"?"#1a1500":"#001a08",
                  border:`1px solid ${item.status==="dead"?"#ff222233":item.status==="risk"?"#ff880033":item.status==="watch"?"#ddcc0033":"#22cc6633"}`
                }}>
                  <div style={{fontSize:9,color:"#555",fontFamily:"'DM Mono',monospace",letterSpacing:2,marginBottom:6}}>SHELFCADDIE RECOMMENDATION</div>
                  <div style={{fontSize:13,color:"#ccc",lineHeight:1.6}}>
                    {item.status==="dead" && `⚠️ Only ${item.qty_sold} unit(s) sold all year. Consider removing from inventory, returning to vendor, or deep discounting to clear remaining ${item.units_on_hand} units.`}
                    {item.status==="risk" && `🔶 At current velocity of ${item.velocity} units/month, you have approximately ${item.monthsRemaining} months of stock on hand. Pause reorders and reduce allocation from reps on next visit.`}
                    {item.status==="watch" && `👁 Selling at ${item.velocity} units/month with ${item.monthsRemaining} months remaining. Monitor closely — do not increase order quantity until velocity trends up for 2+ months.`}
                    {item.status==="healthy" && `✅ Strong performer at ${item.velocity} units/month. Consider increasing reorder buffer to ${Math.round(item.velocity*2)} units to avoid stockouts during peak season.`}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShelfCaddieDemo() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("balls");
  const [loading, setLoading] = useState(false);

  const totalBalls = BALLS_DATA.reduce((a,b)=>a+b.qty_sold,0);
  const totalGloves = GLOVES_DATA.reduce((a,b)=>a+b.qty_sold,0);
  const totalBags = BAGS_DATA.reduce((a,b)=>a+b.qty_sold,0);

  const analyzedBalls = BALLS_DATA.map(i=>analyzeItem(i,totalBalls));
  const analyzedGloves = GLOVES_DATA.map(i=>analyzeItem(i,totalGloves));
  const analyzedBags = BAGS_DATA.map(i=>analyzeItem(i,totalBags));

  const handleLogin = () => {
    if (username.trim().toLowerCase() === "headpro@legacygolf.com" && password.trim() === "callawaystaffer") {
      setLoading(true);
      setTimeout(() => { setLoading(false); setLoggedIn(true); }, 1200);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{
        minHeight:"100vh", background:"#080808",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:"'DM Sans',sans-serif"
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;600&display=swap" rel="stylesheet"/>
        
        {/* Background grid */}
        <div style={{position:"fixed",inset:0,backgroundImage:"linear-gradient(#1a1a1a 1px,transparent 1px),linear-gradient(90deg,#1a1a1a 1px,transparent 1px)",backgroundSize:"40px 40px",opacity:0.3}}/>
        
        <div style={{
          position:"relative", background:"#0a0a0a",
          border:"1px solid #1e1e1e", borderRadius:20,
          padding:"48px 56px", width:420, zIndex:1
        }}>
          {/* Logo */}
          <div style={{textAlign:"center",marginBottom:40}}>
            <div style={{
              width:56,height:56,background:"linear-gradient(135deg,#1a4a2e,#2d7a4f)",
              borderRadius:14,display:"inline-flex",alignItems:"center",justifyContent:"center",
              fontSize:28,marginBottom:16
            }}>⛳</div>
            <div style={{fontSize:28,fontWeight:800,fontFamily:"'Playfair Display',serif",color:"#fff",letterSpacing:-0.5}}>ShelfCaddie</div>
            <div style={{fontSize:10,color:"#444",fontFamily:"'DM Mono',monospace",letterSpacing:3,marginTop:4}}>INVENTORY INTELLIGENCE</div>
          </div>

          {/* Form */}
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <div style={{fontSize:10,color:"#555",fontFamily:"'DM Mono',monospace",letterSpacing:2,marginBottom:8}}>EMAIL</div>
              <input
                value={username} onChange={e=>{setUsername(e.target.value);setError("");}}
                onKeyDown={e=>e.key==="Enter"&&handleLogin()}
                placeholder="headpro@legacygolf.com"
                style={{
                  width:"100%",background:"#111",border:"1px solid #222",
                  borderRadius:10,padding:"12px 16px",color:"#ddd",
                  fontSize:13,fontFamily:"'DM Sans',sans-serif",
                  outline:"none",boxSizing:"border-box"
                }}
              />
            </div>
            <div>
              <div style={{fontSize:10,color:"#555",fontFamily:"'DM Mono',monospace",letterSpacing:2,marginBottom:8}}>PASSWORD</div>
              <input
                type="password" value={password} onChange={e=>{setPassword(e.target.value);setError("");}}
                onKeyDown={e=>e.key==="Enter"&&handleLogin()}
                placeholder="••••••••••••••"
                style={{
                  width:"100%",background:"#111",border:"1px solid #222",
                  borderRadius:10,padding:"12px 16px",color:"#ddd",
                  fontSize:13,fontFamily:"'DM Sans',sans-serif",
                  outline:"none",boxSizing:"border-box"
                }}
              />
            </div>
            {error && <div style={{fontSize:12,color:"#ff4444",fontFamily:"'DM Mono',monospace",textAlign:"center"}}>{error}</div>}
            <button onClick={handleLogin} style={{
              background:"linear-gradient(135deg,#1a4a2e,#2d7a4f)",
              border:"none",borderRadius:10,padding:"14px",
              color:"#fff",fontSize:14,fontWeight:600,cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif",marginTop:8,
              opacity:loading?0.7:1
            }}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          <div style={{textAlign:"center",marginTop:24,fontSize:11,color:"#333",fontFamily:"'DM Mono',monospace"}}>
            POWERED BY SHELFCADDIE · AI FOR GOLF PRO SHOPS
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    {key:"balls",label:"⛳ Golf Balls",count:analyzedBalls.length},
    {key:"gloves",label:"🧤 Gloves",count:analyzedGloves.length},
    {key:"bags",label:"🎒 Bags",count:analyzedBags.length},
  ];

  const currentData = activeTab==="balls"?analyzedBalls:activeTab==="gloves"?analyzedGloves:analyzedBags;

  return (
    <div style={{minHeight:"100vh",background:"#080808",fontFamily:"'DM Sans',sans-serif",color:"#e0e0e0"}}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;600&display=swap" rel="stylesheet"/>

      {/* Header */}
      <div style={{
        background:"#0a0a0a",borderBottom:"1px solid #1a1a1a",
        padding:"0 40px",display:"flex",alignItems:"center",
        justifyContent:"space-between",height:64
      }}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{
            width:32,height:32,background:"linear-gradient(135deg,#1a4a2e,#2d7a4f)",
            borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18
          }}>⛳</div>
          <div>
            <div style={{fontSize:18,fontWeight:700,fontFamily:"'Playfair Display',serif",letterSpacing:-0.5,lineHeight:1}}>ShelfCaddie</div>
            <div style={{fontSize:10,color:"#444",fontFamily:"'DM Mono',monospace",letterSpacing:2}}>INVENTORY INTELLIGENCE</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:20}}>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:13,color:"#ddd",fontWeight:600}}>Legacy Golf Club</div>
            <div style={{fontSize:10,color:"#444",fontFamily:"'DM Mono',monospace"}}>headpro@legacygolf.com</div>
          </div>
          <button onClick={()=>setLoggedIn(false)} style={{
            background:"#111",border:"1px solid #222",color:"#666",
            borderRadius:8,padding:"6px 14px",fontSize:11,cursor:"pointer",
            fontFamily:"'DM Mono',monospace",letterSpacing:1
          }}>SIGN OUT</button>
        </div>
      </div>

      <div style={{padding:"32px 40px",maxWidth:1400,margin:"0 auto"}}>
        {/* Title */}
        <div style={{marginBottom:28}}>
          <div style={{fontSize:11,color:"#444",fontFamily:"'DM Mono',monospace",letterSpacing:2,marginBottom:4}}>FULL YEAR 2025 · NORTHSTAR POS</div>
          <h1 style={{fontSize:30,fontFamily:"'Playfair Display',serif",fontWeight:800,margin:0,color:"#fff"}}>Inventory Dashboard</h1>
        </div>

        {/* Tabs */}
        <div style={{display:"flex",gap:4,marginBottom:28,background:"#0d0d0d",padding:4,borderRadius:12,width:"fit-content",border:"1px solid #1a1a1a"}}>
          {tabs.map(t=>(
            <button key={t.key} onClick={()=>setActiveTab(t.key)} style={{
              background:activeTab===t.key?"#1e1e1e":"transparent",
              border:activeTab===t.key?"1px solid #2a2a2a":"1px solid transparent",
              color:activeTab===t.key?"#fff":"#555",
              borderRadius:8,padding:"8px 20px",fontSize:13,cursor:"pointer",
              fontFamily:"'DM Sans',sans-serif",fontWeight:500,
              display:"flex",alignItems:"center",gap:8
            }}>
              {t.label}
              <span style={{
                background:activeTab===t.key?"#2a2a2a":"#111",
                borderRadius:20,padding:"1px 8px",fontSize:10,
                fontFamily:"'DM Mono',monospace",color:activeTab===t.key?"#aaa":"#444"
              }}>{t.count}</span>
            </button>
          ))}
        </div>

        <Table items={currentData}/>

        {/* Footer */}
        <div style={{marginTop:32,textAlign:"center",color:"#222",fontSize:11,fontFamily:"'DM Mono',monospace",letterSpacing:2}}>
          SHELFCADDIE · AI INVENTORY INTELLIGENCE FOR GOLF PRO SHOPS · © 2026
        </div>
      </div>
    </div>
  );
}
