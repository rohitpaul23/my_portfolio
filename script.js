/* ── PROJECT DATA ── */
    const PD = {
      1: { t: "MoDA Real-Time Lip-Sync Pipeline", c: "alethia", l: "Alethia AI", p: "August – October 2025", d: "Integrated MoDA into Alethia's production streaming system, rebuilt for real-time performance. Slashed first-frame latency from 10s+ to under 1 second.", stats: [{ v: "10s", l: "Before" }, { v: "<1s", l: "After" }, { v: "10×", l: "Speed-up" }], b: ["Deconstructed MoDA pipeline into independent, parallelisable components", "Converted Decoder & Motion Extractor to <strong>TensorRT</strong> — halved inference time", "Implemented <strong>Kalman smoothing</strong> to reduce large preceding-frame window dependency", "Used pre-silent audio padding and reduced frame overlap to cut accumulation time", "Built <strong>progressive batching</strong> — starts small, scales up for fast initial frames", "Changed Motion Extractor scheduler to <strong>flow matching</strong>, halving inference steps", "Added warmup scripts for all model weights to eliminate cold-start delays", "Rewrote Putback worker from cv2/cython to <strong>PyTorch</strong> — significant time savings", "Fixed critical bug causing diverging eye contact and head rotation over time"], g: ["MoDA", "TensorRT", "Kalman Smoothing", "Progressive Batching", "Flow Matching", "PyTorch", "Streaming"] },
      2: { t: "Emotive Lip-Sync System", c: "alethia", l: "Alethia AI", p: "September – November 2025", d: "Extended MoDA to support expressive, emotionally resonant speech synthesis. Built a full end-to-end prototype from text to emotive talking avatar.", b: ["Implemented <strong>emotion-conditional CFG</strong> for expressive avatar outputs", "<strong>Intra-emotion interpolation</strong> for smooth transitions between emotional states", "<strong>Emotion transfer from a reference image</strong> — avatar mirrors the reference emotion", "Integrated <strong>Cartesia SSML tags</strong> for distinct emotional tones in voice output", "Full Facial Animation vs Lip-Only Animation comparative testing", "Built <strong>Gradio end-to-end prototype</strong>: base video → preprocessing → agent → SSML audio → emotive lip-sync", "Developed 'silent lips' feature for forced closed-mouth state during pauses"], g: ["Emotion-Conditional CFG", "Intra-Emotion Interpolation", "Cartesia SSML", "Gradio", "MoDA"] },
      3: { t: "Lip-Sync Artifact Resolution", c: "alethia", l: "Alethia AI", p: "October – December 2025", d: "Systematic engineering to eliminate visual artifacts degrading immersion in the MoDA streaming output. Each fix required deep profiling and novel solutions.", b: ["<strong>Mumbling</strong> — fixed preprocessing script error causing unnatural lip micro-movements", "<strong>Flickering</strong> — improved smoothing algorithm to eliminate interval-based flicker", "<strong>Wandering eyes</strong> — fixed eye gaze to match source video for stable appearance", "<strong>Pursed lips</strong> — automated mathematical solution analysing facial datapoints to dynamically adjust mouth-opening for diverse face shapes", "<strong>Eyebrow mismatch</strong> — corrected excessive and mismatched eyebrow movement", "<strong>Ear/Headphone movement</strong> — fixed unnatural ear and headphone animation", "Fixed <strong>MyelinError</strong> occurring during live streaming sessions", "Built Talking-to-Neutral script using LivePortrait concepts for seamless pause transitions"], g: ["Debugging", "Computer Vision", "MoDA", "PyTorch", "LivePortrait", "Signal Processing"] },
      4: { t: "JoyVASA + LivePortrait Training", c: "alethia", l: "Alethia AI", p: "January – July 2025", d: "Developed an in-house lip-sync model merging JoyVASA and LivePortrait, adding manual expression controls and improved audio-driven head motion prediction.", b: ["Merged JoyVASA and LivePortrait model architectures", "Added manual controls: head rotation, eye gaze, mouth shapes (smile, wee, woo)", "<strong>Unnormalised 6D rotation representation</strong> outperformed 3×3 rotation matrix", "<strong>Full UpsampleConformerEncoder</strong> for superior audio feature extraction", "Applied <strong>probabilistic teacher forcing</strong> and Disentangle Conditioning", "<strong>Ray Tune</strong> for loss weight optimisation", "Confirmed audio must be chunked before embedding — via ChatterBox vs Voila comparison", "Scaled training: MEAD (studio) → HDTF (in-the-wild newsroom) datasets"], g: ["JoyVASA", "LivePortrait", "6D Rotation", "UpsampleConformerEncoder", "Ray Tune", "MEAD", "HDTF"] },
      5: { t: "Distributed Training Infrastructure", c: "alethia", l: "Alethia AI", p: "June – July 2025", d: "Built a fault-tolerant, scalable distributed training system from scratch designed to run cost-effectively on cloud GPU platforms with automatic recovery.", b: ["Ray Tune + DDP for distributed data-parallel training", "TensorBoard integration for real-time loss visualisation", "Fault-tolerant across low-cost platforms: <strong>VastAI</strong> and <strong>IONet</strong>", "Auto-uploads checkpoints to <strong>S3</strong> with resume-from-last-saved-state script", "Progressive scale validation: 1 → 10 → 100 → 1000 samples", "Trained on MEAD and HDTF datasets"], g: ["DDP", "Ray Tune", "TensorBoard", "S3", "VastAI", "IONet", "PyTorch"] },
      6: { t: "Dataset Preparation Pipeline", c: "alethia", l: "Alethia AI", p: "July – August 2025", d: "Built a full pipeline for sourcing, scraping, filtering and curating high-quality video data for lip-sync model training. Produced 20 hours of clean data.", b: ["Built a <strong>web app</strong> that takes YouTube playlists → scrapes and creates multiple clips for training", "Advanced filtration and <strong>proxy support</strong> for reliable scraping", "Second semi-automated web UI to accelerate curation workflow", "<strong>VLM + LLM</strong>-based CV filtration for quality assessment", "Filtered for: occlusions, excessive head rotation, high movement, audio quality", "Output: <strong>20 hours</strong> of high-quality curated training data"], g: ["CV Filtration", "VLM", "LLM", "Web Scraping", "Data Curation", "Python", "Ray Tune"] },
      7: { t: "Image Generation API — Gemini + Flux", c: "alethia", l: "Alethia AI", p: "March – May 2025", d: "Production image generation API with two backends, optimised for cost and reliability at scale.", b: ["<strong>Multi-key Gemini API rotation</strong> to maximise free quota usage", "<strong>Flux</strong> as fallback backend when Gemini quota is exhausted", "CPU-based instances on <strong>GCP and Azure</strong> for cost reduction", "<strong>SQS health checks</strong>, robust logging and alert mechanisms", "Deployed <strong>Flux avatar and selfie pipeline</strong> on RunPod", "Explored Nunchaku + Flux via ComfyUI workflows with quality evaluation"], g: ["Gemini API", "Flux", "GCP", "Azure", "RunPod", "SQS", "ComfyUI", "FastAPI"] },
      8: { t: "Model Benchmarking & Analysis", c: "alethia", l: "Alethia AI", p: "March – November 2025", d: "Systematic evaluation of open-source models to inform Alethia's product roadmap. Focused on cost-efficiency and output quality.", b: ["<strong>Lip-sync:</strong> LatentSync, HunyuanVideo-Avatar, Fantasy Talking, Multi-Talk (TeaCache), WanS2V, FramePack", "<strong>Cost-per-second</strong> video analysis for strategic model selection", "<strong>Background removal:</strong> DiffDis, MEMatte, MatAnyone, MattePro vs Inspyrenet", "<strong>I2V models:</strong> HeyGen, InfiniteTalk, WanS2V, Kling 2.5 Turbo, Seadance 1.5", "<strong>Animation:</strong> Wan-Animate, FramePack (1-second interpolation), SteadyDancer", "3D Gaussian Splatting (EGSTalker) vs 2D MoDA analysis"], g: ["LatentSync", "HunyuanVideo", "Multi-Talk", "FramePack", "WanS2V", "Model Evaluation", "Cost Analysis"] },
      9: { t: "Streaming Protocol Analysis", c: "alethia", l: "Alethia AI", p: "December 2025", d: "Deep-dive technical analysis of streaming protocols and portrait animation technologies to guide infrastructure decisions for 2026.", b: ["Compared <strong>OME with SRT vs WebRTC vs HLS</strong> — optimal latency vs stability", "Evaluated <strong>PersonaLive vs LivePortrait</strong> for portrait animation replacement", "Established a <strong>Large-scale MoDA Finetuning Plan</strong> and checklist for 2026", "Analysed WAN2.2 technical report on data pipeline and parallelisation strategy"], g: ["WebRTC", "HLS", "SRT", "LivePortrait", "Streaming", "Infrastructure"] },
      10: { t: "Avatar Style & Image Pipelines", c: "alethia", l: "Alethia AI", p: "January – February 2025", d: "Resolved critical output quality issues in the avatar pipeline and built new image manipulation capabilities.", b: ["Fixed Pixar, anime, and 3D avatar styles — clear stylistic distinctions", "Eliminated NSFW outputs via thorough testing and filter implementation", "Built <strong>Flux inpaint pipeline</strong> for meme correction and partial image modification", "Trained <strong>identity-preservation model</strong> for professional selfie generation", "Improved Sleeping/Waking animations — reduced exaggerated breathing", "Standardised celebrity generation using <strong>Seedream reference-based system</strong>", "Implemented safety filters (nudity) and refined default expressions"], g: ["Flux Inpaint", "Identity Preservation", "Seedream", "Avatar Styling", "ComfyUI"] },
      11: { t: "Generative Scene & Asset Pipeline", c: "alethia", l: "Alethia AI", p: "May 2025", d: "Built pipelines for generating coherent multi-scene visual content with identity preservation across frames.", b: ["Tested <strong>UNO model</strong> for identity-preserved image generation; created a short movie script with scenes", "Explored <strong>Flux Kontext</strong> for diverse scene generation — replaced UNO", "Built <strong>LTX-Video pipeline</strong> with enhanced prompting and max retries", "Used <strong>Gemini filtration</strong> on LTX-Video outputs for quality assurance", "Tested <strong>KEEP repo</strong> for face upscaling on top of LTX-Video output"], g: ["UNO", "Flux Kontext", "LTX-Video", "KEEP", "Gemini", "Scene Generation"] },
      12: { t: "Emotional Facial Expression Generation", c: "alethia", l: "Alethia AI", p: "March 2025", d: "Extended the motion-to-video model to support dynamic, audio-driven emotional expression changes for lifelike avatar behaviour.", b: ["Used an <strong>LLM</strong> to generate frame-wise expression instructions from audio transcription", "Supported transitions: smile, sad, angry, woo, aaa, wink, blink", "Tweaked intermediary data representation for smooth motion transitions", "Optimised model with <strong>fp16 weights</strong> — improved efficiency without sacrificing quality"], g: ["LLM", "Facial Expressions", "fp16", "Motion Synthesis", "Avatar"] },
      13: { t: "Gradio UI for Marketing Team", c: "alethia", l: "Alethia AI", p: "March 2025", d: "Internal tool that empowered the marketing team to produce lip-sync video content independently, reducing engineering bottlenecks.", b: ["Integrated <strong>Ditto</strong> and <strong>LatentSync</strong> into a unified Gradio interface", "Audio-to-video lip-sync creation with editing controls", "<strong>Smile dampening</strong> to suppress unnatural expressions", "Silent lip adjustment for natural pauses in speech", "Deployed for daily AINS video production with the marketing team"], g: ["Gradio", "Ditto", "LatentSync", "Internal Tool", "Python"] },
      14: { t: "SCAIL + 2D Character Generation", c: "alethia", l: "Alethia AI", p: "December 2025", d: "Automated 2D character and emotive base video creation for use in the MoDA lip-sync pipeline.", b: ["Tested <strong>SCAIL</strong> on different settings for 2D character generation automation", "Generated emotive base videos automatically for use with MoDA pipeline", "Standardised character consistency across static, animated, and talking states", "Benchmarked WanS2V, Multi-Talk for superior base-video generation for expressive demos"], g: ["SCAIL", "2D Character", "Base Video", "MoDA", "WanS2V"] },
      15: { t: "Morgan Livestream Preparation", c: "alethia", l: "Alethia AI", p: "May 2025", d: "Prepared and coordinated all assets and systems for a production AI avatar livestream.", b: ["Prepared high-quality base assets with <strong>varied hand gesture sequences</strong>", "Tested multiple real-time approaches with the CV team before going live", "Live coordination during the stream to diagnose and resolve issues in real-time", "Applied prosody and audio features to enhance lip-sync realism during the event"], g: ["Livestream", "Real-Time", "Avatar", "Asset Preparation"] },
      23: { t: "SOTA Model Benchmarking Pipeline", c: "alethia", l: "Alethia AI", p: "2025", d: "Benchmarked different SOTA image and video generation models with robust prompt engineering.", b: ["Created advanced <strong>prompt templates</strong> and middle-man prompting to steer desired results", "Implemented <strong>fault tolerance</strong> mechanisms to handle and recover from erroneous user prompts", "Systematic evaluation of output quality across leading generative architectures"], g: ["Model Evaluation", "Prompt Engineering", "SOTA Generation", "Fault Tolerance"] },
      24: { t: "Meme Generation & OCR Correction", c: "alethia", l: "Alethia AI", p: "2025", d: "Automated pipeline for generating memes and correcting distorted text using OCR.", b: ["Generated memes featuring text directly via advanced image generation models", "Integrated <strong>Google OCR</strong> to detect poorly generated or distorted text", "Automatically corrected OCR-detected erroneous text layers in the final output"], g: ["Google OCR", "Image Generation", "Text Recognition", "Automation"] },
      25: { t: "YouTube Data Scraper for Lip-Sync", c: "alethia", l: "Alethia AI", p: "2025", d: "Built a UI scraper to autonomously curate high-quality lip-sync training clips from YouTube.", b: ["Ingests YouTube playlists or video links for deep processing", "Traverses and <strong>automatically crops clips</strong> required for high-quality audio-visual sync training", "Advanced filtering criteria: <strong>no mouth occlusion</strong>, strict audio-lip sync, single character presence, high resolution"], g: ["Web Scraping", "Data Curation", "YouTube API", "Automation", "Computer Vision"] },
      16: { t: "Virtual Try-On Pipeline", c: "dressme", l: "DressMe AI", p: "June 2023 – October 2024", d: "End-to-end pipeline placing reference clothing onto user images using diffusion models, with harmonisation and relighting.", b: ["Developed and deployed diffusion-based virtual try-on model architectures", "Fine-tuned <strong>PHNet image harmonisation model</strong> for seamless clothing compositing", "Implemented <strong>image relighting</strong> via a Three.js virtual light source"], g: ["Diffusion Models", "PHNet", "Image Harmonisation", "Three.js"] },
      26: { t: "PHNet Harmonization & 3D Relighting", c: "dressme", l: "DressMe AI", p: "June 2023 – October 2024", d: "Fine-tuned a PHNet harmonization model using custom augmented datasets generated via Three.js.", b: ["Created a bespoke dataset specifically tailored to model training needs", "Used <strong>Three.js</strong> as a powerful data augmentation tool to simulate diverse lighting conditions (colors, directionality)", "Drastically improved <strong>PHNet</strong> training performance and output coherence across varying lighting environments"], g: ["PHNet", "Data Augmentation", "Three.js", "Lighting Simulation"] },
      17: { t: "Multi-GPU Distributed Training", c: "dressme", l: "DressMe AI", p: "June 2023 – October 2024", d: "Distributed GPU training infrastructure powering the DressMe AI model training pipeline.", b: ["Multi-GPU distributed training pipelines for large-scale dataset preparation", "Optimised training throughput and data loading for fashion image datasets", "Enabled rapid experimentation and iteration across model architectures"], g: ["Multi-GPU", "Distributed Training", "PyTorch", "Dataset Preparation"] },
      18: { t: "Agentic AI News Pipeline", c: "personal", l: "Personal Project", p: "Personal Project", d: "Agentic workflow that automatically sources, contextualises, and delivers daily AI news updates, integrated with ClawdBot.", b: ["Built using <strong>LangChain</strong> for multi-step agentic reasoning", "Automatically scrapes and contextualises daily AI news from multiple sources", "Integrated with the <strong>ClawdBot</strong> platform for end-user delivery"], g: ["LangChain", "Agentic AI", "ClawdBot", "RAG", "Automation"] },
      19: { t: "WebGL Real-Time Lip-Sync", c: "personal", l: "Personal Project", p: "Personal Project", d: "Browser-based real-time lip-sync using WebGL, plus a video creation automation pipeline using Remotion.", b: ["WebGL-based real-time lip-sync rendering in the browser", "Video creation automation pipeline using <strong>Remotion</strong>", "Designed for low-latency performance in live interactive contexts"], g: ["WebGL", "Remotion", "JavaScript", "Real-Time", "Video Generation"] },
      20: { t: "English–German NMT Model", c: "independent", l: "Independent", p: "Academic", d: "Neural machine translation model for English-to-German using LSTM seq2seq with attention mechanism.", b: ["Sequence-to-sequence architecture with LSTM encoder-decoder", "Implemented <strong>attention mechanism</strong> for improved long-sentence translation", "Trained on standard WMT English–German dataset pairs"], g: ["LSTM", "Attention", "NMT", "PyTorch", "NLP"] },
      21: { t: "TMDB Box Office Prediction", c: "independent", l: "Kaggle Competition", p: "Kaggle", d: "Competition entry predicting box office revenue using feature engineering and ensemble methods.", b: ["Feature engineering on movie metadata, cast, crew, and budget", "<strong>Random Forests</strong> and ensemble approach for revenue prediction"], g: ["Random Forests", "Feature Engineering", "Python", "Sklearn", "Kaggle"] },
      22: { t: "Neural Network Music Generation", c: "independent", l: "Independent", p: "Academic", d: "Generative RNN trained on MIDI data to produce new musical sequences.", b: ["Trained recurrent neural network on MIDI music dataset", "Generated novel musical sequences in learned stylistic patterns", "Explored temperature-based sampling for creativity control"], g: ["RNN", "Music Generation", "PyTorch", "Generative AI"] }
    };

    const PACC = { alethia: "linear-gradient(90deg,#14b8a6,#6366f1)", dressme: "linear-gradient(90deg,#818cf8,#c084fc)", personal: "linear-gradient(90deg,#f59e0b,#f97316)", independent: "linear-gradient(90deg,#c084fc,#818cf8)" };
    const PCOL = { alethia: "#14b8a6", dressme: "#818cf8", personal: "#f59e0b", independent: "#c084fc" };
    const PTAG = { alethia: "pct-alethia", dressme: "pct-dressme", personal: "pct-personal", independent: "pct-independent" };
    const PLAB = { alethia: "Alethia AI", dressme: "DressMe AI", personal: "Personal Project", independent: "Independent" };

    /* Filter */
    document.querySelectorAll('.pf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('pf-active'));
        btn.classList.add('pf-active');
        const f = btn.dataset.filter;
        document.querySelectorAll('.pcard').forEach(c => c.classList.toggle('ph', f !== 'all' && c.dataset.company !== f));
      });
    });

    /* Open modal */
    function openPM(id) {
      const p = PD[id]; if (!p) return;
      const col = PCOL[p.c];
      document.getElementById('pmodal-accent').style.background = PACC[p.c];
      document.getElementById('pmodal-tag').innerHTML = `<span class="pctag ${PTAG[p.c]}">${p.l}</span>`;
      document.getElementById('pmodal-title').textContent = p.t;
      document.getElementById('pmodal-period').textContent = p.p;
      let h = '';
      if (p.stats) {
        h += `<div class="pm-lbl">Key Metrics</div><div class="pm-stats">`;
        p.stats.forEach(s => h += `<div class="pm-stat"><div class="pm-stat-v" style="color:${col}">${s.v}</div><div class="pm-stat-l">${s.l}</div></div>`);
        h += `</div>`;
      }
      h += `<div class="pm-lbl">Overview</div><p class="pm-desc">${p.d}</p>`;
      h += `<div class="pm-lbl" style="margin-top:20px">What I Built</div><ul class="pm-bullets">`;
      p.b.forEach(b => h += `<li style="color:${col}">${b}</li>`);
      h += `</ul>`;
      h += `<div class="pm-lbl" style="margin-top:20px">Tech Stack</div><div class="pm-tags">`;
      p.g.forEach(t => h += `<span class="pm-tag">${t}</span>`);
      h += `</div>`;
      h += `<div class="pm-lbl" style="margin-top:20px">Links</div><div class="pm-links">`;
      h += `<div class="pm-link ph"><div class="pm-link-ico">💻</div><div class="pm-link-meta"><div class="pm-link-type">GitHub</div><div class="pm-link-label">Link not added yet</div></div><span style="font-size:.75rem;color:#52525b">↗</span></div>`;
      h += `<div class="pm-link ph"><div class="pm-link-ico">✍️</div><div class="pm-link-meta"><div class="pm-link-type">Blog / Write-up</div><div class="pm-link-label">Link not added yet</div></div><span style="font-size:.75rem;color:#52525b">↗</span></div>`;
      h += `</div>`;
      document.getElementById('pmodal-bd').innerHTML = h;
      document.getElementById('pmodal-backdrop').classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('pmodal').scrollTop = 0;
    }

    function closePM() {
      document.getElementById('pmodal-backdrop').classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.pcard').forEach(c => c.addEventListener('click', () => openPM(+c.dataset.id)));
    document.getElementById('pmodal-close').addEventListener('click', closePM);
    document.getElementById('pmodal-backdrop').addEventListener('click', e => { if (e.target.id === 'pmodal-backdrop') closePM(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closePM(); });

    /* ── CERTIFICATION DATA ── */
    const CD = [
      { t: "Deep Learning with PyTorch: Zero to GANs", i: "Jovian", l: "https://jovian.ai/certificate/MFQTONJTG4" },
      { t: "Machine Learning Model Deployment using Flask", i: "Great Learning", l: "https://www.mygreatlearning.com/certificate/IMOOQIZB?referrer_code=GLJG4BYNPJJJW" },
      { t: "Mathematics for ML: Multivariate Calculus", i: "Imperial College London - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/PSRMFD5QYNUQ" },
      { t: "Mathematics for ML: Linear Algebra", i: "Imperial College London - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/B5WNS558EWCD" },
      { t: "Introduction to Data Science in Python", i: "University of Michigan - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/KQKTTP4PLL2B" },
      { t: "Data Analysis with Python: Zero to Pandas", i: "Jovian", l: "https://jovian.ai/certificate/MFQTCNZQG4" },
      { t: "Python Data Analysis", i: "Rice University - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/TPE4AWU7KK5R" },
      { t: "Python Data Visualization", i: "Rice University - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/Y7SBX34Z9385" },
      { t: "Cluster Analysis in Data Mining", i: "UIUC - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/MWQJF4MSSNC7" },
      { t: "Discrete Math and Analyzing Social Graphs", i: "HSE University - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/RAHD358BJ95W" },
      { t: "Python Programming Essentials", i: "Rice University - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/BZU9955YK28H" },
      { t: "Python Data Representations", i: "Rice University - Coursera", l: "https://www.coursera.org/account/accomplishments/verify/4RJ6CHTZ6ZHW" },
      { t: "Flask Python", i: "Great Learning", l: "https://www.mygreatlearning.com/certificate/AKHJBVPS?referrer_code=GLJG4BYNPJJJW" },
      { t: "M001: MongoDB Basics", i: "MongoDB University", l: "https://university.mongodb.com/course_completion/aef2ec93-6d26-4737-a378-923f699bdf14" }
    ];

    const certList = document.getElementById('cert-list');
    if (certList) {
      let certHTML = "";
      CD.forEach((c, idx) => {
        certHTML += `<span class="chip ccard" data-id="${idx}" style="padding:8px 14px; cursor:pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--surface)'; this.style.color='var(--accent)'" onmouseout="this.style.background=''; this.style.color=''">${idx + 1}. ${c.t}</span>`;
      });
      certList.innerHTML = certHTML;
    }

    function openCM(id) {
      const c = CD[id]; if (!c) return;
      document.getElementById('cmodal-title').textContent = c.t;
      document.getElementById('cmodal-inst').textContent = c.i;
      
      let h = '';
      if (c.l) {
        h += `<div class="pm-lbl" style="margin-top:10px">Certificate Link</div><div class="pm-links" style="margin-top:10px;">`;
        const shortUrl = c.l.length > 50 ? c.l.substring(0, 47) + '...' : c.l;
        h += `<a href="${c.l}" target="_blank" style="text-decoration:none;" class="pm-link"><div class="pm-link-ico">📜</div><div class="pm-link-meta"><div class="pm-link-type">Verify</div><div class="pm-link-label">${shortUrl}</div></div><span style="font-size:.75rem;color:#52525b">↗</span></a>`;
        h += `</div>`;
      } else {
        h += `<p class="pm-desc" style="margin-top:10px; color: var(--text3)">Certificate link not available.</p>`;
      }
      const bd = document.getElementById('cmodal-bd');
      if(bd) bd.innerHTML = h;
      
      const bdrop = document.getElementById('cmodal-backdrop');
      if(bdrop) {
        bdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeCM() {
      const bdrop = document.getElementById('cmodal-backdrop');
      if(bdrop) bdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (certList) {
      certList.querySelectorAll('.ccard').forEach(c => c.addEventListener('click', () => openCM(+c.dataset.id)));
    }
    
    // Add null checks for robustness in case HTML structure is modified
    const cbtn = document.getElementById('cmodal-close');
    if(cbtn) cbtn.addEventListener('click', closeCM);
    
    const cbdrop = document.getElementById('cmodal-backdrop');
    if(cbdrop) cbdrop.addEventListener('click', e => { if (e.target.id === 'cmodal-backdrop') closeCM(); });
    
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCM(); });

/* ── CUSTOM CURSOR ── */
    const cur = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px' });
    (function a() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(a) })();

    /* ── THREE.JS NEURAL PARTICLE WEB ── */
    (function () {
      const canvas = document.getElementById('neural-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(innerWidth, innerHeight);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 150);

      // 6 Section Nodes
      const nodes = [
        { c: 0x6366f1, p: { x: 0, y: 0, z: 0 }, s: 0.3 },       // Hero
        { c: 0x818cf8, p: { x: 15, y: -8, z: -15 }, s: 0.4 },   // Skills
        { c: 0x14b8a6, p: { x: 8, y: -20, z: -35 }, s: 0.5 },   // Projects
        { c: 0xc084fc, p: { x: -12, y: -10, z: -45 }, s: 0.35 },// Writing
        { c: 0xf59e0b, p: { x: -25, y: 8, z: -30 }, s: 0.45 },  // Education
        { c: 0x22c55e, p: { x: -10, y: 20, z: -10 }, s: 0.3 }   // Contact
      ];

      const coreMeshes = [];
      nodes.forEach(n => {
        const mat = new THREE.MeshBasicMaterial({ color: n.c, transparent: true, opacity: 0.8 });
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(n.s, 32, 32), mat);
        mesh.position.set(n.p.x, n.p.y, n.p.z);
        scene.add(mesh);
        
        for (let i = 1; i <= 3; i++) {
          const glow = new THREE.Mesh(new THREE.SphereGeometry(n.s + i * 0.4, 24, 24), new THREE.MeshBasicMaterial({ color: n.c, transparent: true, opacity: 0.08 - i * 0.02 }));
          glow.position.copy(mesh.position);
          scene.add(glow);
        }
        
        const orb = new THREE.Mesh(new THREE.TorusGeometry(n.s * 4, 0.01 + n.s * 0.02, 12, 60), new THREE.MeshBasicMaterial({ color: n.c, transparent: true, opacity: 0.3 }));
        orb.position.copy(mesh.position);
        orb.rotation.x = Math.random() * Math.PI;
        orb.rotation.y = Math.random() * Math.PI;
        scene.add(orb);
        coreMeshes.push({ mesh, orb });
      });

      const N = 1000; // Increased Neural particles for better density
      const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), spd = new Float32Array(N * 3);
      const home = new Float32Array(N * 3); // Store home node position to bounce locally
      for (let i = 0; i < N; i++) {
        const node = nodes[Math.floor(Math.random() * nodes.length)];
        let dx = (Math.random() - 0.5) * 25, dy = (Math.random() - 0.5) * 25, dz = (Math.random() - 0.5) * 25;
        
        if(Math.random() > 0.8) {
           dx = (Math.random() - 0.5) * 60; dy = (Math.random() - 0.5) * 60; dz = (Math.random() - 0.5) * 60;
        }

        home[i * 3] = node.p.x;
        home[i * 3 + 1] = node.p.y;
        home[i * 3 + 2] = node.p.z;

        pos[i * 3] = node.p.x + dx; 
        pos[i * 3 + 1] = node.p.y + dy; 
        pos[i * 3 + 2] = node.p.z + dz;
        
        spd[i * 3] = (Math.random() - 0.5) * 0.012; 
        spd[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
        spd[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
        
        const c = new THREE.Color(node.c);
        c.offsetHSL(0, 0, (Math.random() - 0.5) * 0.2);
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true, opacity: 0.7 })));

      const ML = 1500, lp = new Float32Array(ML * 6), lc = new Float32Array(ML * 6);
      const lgeo = new THREE.BufferGeometry();
      lgeo.setAttribute('position', new THREE.BufferAttribute(lp, 3));
      lgeo.setAttribute('color', new THREE.BufferAttribute(lc, 3));
      scene.add(new THREE.LineSegments(lgeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.15 })));

      const mouse = { x: 0, y: 0 };
      window.addEventListener('mousemove', e => { mouse.x = (e.clientX / innerWidth - 0.5) * 2; mouse.y = -(e.clientY / innerHeight - 0.5) * 2 });
      
      let scrollFrac = 0; 
      window.addEventListener('scroll', () => { 
        scrollFrac = Math.max(0, Math.min(1, window.scrollY / (document.documentElement.scrollHeight - innerHeight))); 
      });

      let currentCamPos = new THREE.Vector3(0, 0, 20);
      let targetCamPos = new THREE.Vector3(0, 0, 20);
      let currentLookAt = new THREE.Vector3(0, 0, 0);
      let targetLookAt = new THREE.Vector3(0, 0, 0);

      function tick() {
        requestAnimationFrame(tick);
        const t = Date.now() * 0.001;

        for (let i = 0; i < N; i++) {
          pos[i * 3] += spd[i * 3]; 
          pos[i * 3 + 1] += spd[i * 3 + 1];
          pos[i * 3 + 2] += spd[i * 3 + 2];
          
          let hx = home[i * 3], hy = home[i * 3 + 1], hz = home[i * 3 + 2];
          
          if (Math.abs(pos[i * 3] - hx) > 35) spd[i * 3] *= -1;
          if (Math.abs(pos[i * 3 + 1] - hy) > 35) spd[i * 3 + 1] *= -1;
          if (Math.abs(pos[i * 3 + 2] - hz) > 35) spd[i * 3 + 2] *= -1;
        }
        geo.attributes.position.needsUpdate = true;

        let li = 0, T = 4.0;
        for (let i = 0; i < N && li < ML; i++) {
          for (let j = i + 1; j < N && li < ML; j++) {
            const dx = pos[i * 3] - pos[j * 3], dy = pos[i * 3 + 1] - pos[j * 3 + 1], dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (d < T) {
              const a = (1 - d / T) * 0.8;
              lp[li * 6] = pos[i * 3]; lp[li * 6 + 1] = pos[i * 3 + 1]; lp[li * 6 + 2] = pos[i * 3 + 2];
              lp[li * 6 + 3] = pos[j * 3]; lp[li * 6 + 4] = pos[j * 3 + 1]; lp[li * 6 + 5] = pos[j * 3 + 2];
              lc[li * 6] = col[i * 3] * a; lc[li * 6 + 1] = col[i * 3 + 1] * a; lc[li * 6 + 2] = col[i * 3 + 2] * a;
              lc[li * 6 + 3] = col[j * 3] * a; lc[li * 6 + 4] = col[j * 3 + 1] * a; lc[li * 6 + 5] = col[j * 3 + 2] * a;
              li++;
            }
          }
        }
        lgeo.attributes.position.needsUpdate = true; lgeo.attributes.color.needsUpdate = true;
        lgeo.setDrawRange(0, li * 2);

        coreMeshes.forEach((cm, idx) => {
          cm.orb.rotation.z = t * 0.2 + idx;
          cm.orb.rotation.x += 0.005;
        });

        // Camera Tracking Map Logic
        const segments = nodes.length - 1;
        // Make sure index isn't out of bounds when scrollFrac == 1
        const index = Math.min(Math.floor(scrollFrac * segments), segments - 1);
        const segmentFrac = (scrollFrac - (index / segments)) * segments;
        const easeFrac = segmentFrac * segmentFrac * (3 - 2 * segmentFrac); // Smoothstep

        const n1 = nodes[index].p;
        const n2 = nodes[index + 1].p;

        targetLookAt.set(
          n1.x + (n2.x - n1.x) * easeFrac,
          n1.y + (n2.y - n1.y) * easeFrac,
          n1.z + (n2.z - n1.z) * easeFrac
        );

        targetCamPos.set(
          targetLookAt.x + 8 * mouse.x,
          targetLookAt.y + 4 * mouse.y,
          targetLookAt.z + 20
        );

        currentCamPos.lerp(targetCamPos, 0.05);
        currentLookAt.lerp(targetLookAt, 0.05);

        camera.position.copy(currentCamPos);
        camera.lookAt(currentLookAt);

        renderer.render(scene, camera);
      }
      tick();

      window.addEventListener('resize', () => {
        camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
      });
    })();

    /* ── SCROLL PROGRESS ── */
    window.addEventListener('scroll', () => {
      const p = scrollY / (document.documentElement.scrollHeight - innerHeight) * 100;
      document.getElementById('progress-bar').style.width = p + '%';
    });

    /* ── REVEAL ── */
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }), { threshold: .08 });
    document.querySelectorAll('.r').forEach(el => obs.observe(el));