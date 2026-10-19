'use strict';
const featureData={
 dataset:{number:'01',title:'학습에 사용할<br>실험 범위를 선택',body:'원재료 카테고리, 물성, 시험조건을 확인하고 데이터셋을 확정합니다. 파일 업로드와 저장된 자료의 재사용도 지원합니다.',points:['자료 출처와 버전 확인','물성별 학습 가능 여부 확인'],image:'dataset',alt:'실험 DB의 조회 조건과 물성 선택 화면 예시',caption:'데이터셋 선택 화면 예시',guide:'dataset'},
 training:{number:'02',title:'독립 모델과<br>공동 모델을 비교',body:'샘플 단위 다중 물성 학습에서 독립·공동 후보를 비교합니다. 물성별 검증 오차와 평가자료의 결과로 모델을 확인합니다.',points:['샘플과 검증 그룹 구분','물성별 오차와 결과 확인'],image:'training',alt:'물성별 후보 모델과 검증 지표를 비교하는 재구성 화면',caption:'학습 비교 보고서 예시 · 수치는 가상 값',guide:'training'},
 prediction:{number:'03',title:'목표 조건을 반영한<br>배합 후보 검토',body:'원재료 투입량과 시험조건을 바탕으로 물성을 예측합니다. 추천 후보와 미세증분 결과를 같은 모델 기준으로 비교할 수 있습니다.',points:['물성 목표와 제약조건 확인','미세증분과 치환 후보 검토'],image:'prediction',alt:'입력 배합과 목표 물성의 예측 결과를 비교하는 예시 화면',caption:'물성 예측 화면 예시 · 실제 성능 수치가 아닙니다',guide:'prediction'},
 knowledge:{number:'04',title:'문헌 근거와<br>원문을 함께 확인',body:'TDS, 논문, 특허와 내부 실험보고서의 출처를 확인합니다. 보존된 추출 원문과 원본 파일을 조회해 설명의 근거를 검토합니다.',points:['문서 보존 상태 구분','원문 조회와 원본 다운로드'],image:'knowledge',alt:'문서 목록과 전체 원문을 함께 확인하는 재구성 화면',caption:'문헌·원문 조회 화면 예시',guide:'knowledge'},
 trial:{number:'05',title:'선정한 후보를<br>시험 초안으로 연결',body:'선정 Revision의 자재와 시험항목을 실제 마스터에 매핑합니다. 사용자 확인 후 작업지시서 초안을 만들고 기존 시험평가 절차로 이어갑니다.',points:['배합·시험조건 매핑 확인','초안 미리보기와 사용자 확인'],image:'trial',alt:'배합과 시험항목을 연결한 시험평가 초안 예시 화면',caption:'시험평가 초안 연결 화면 예시',guide:'trial'}
};
const tabs=[...document.querySelectorAll('[data-feature]')];
function selectFeature(key,focus=false){
 const data=featureData[key];if(!data)return;
 tabs.forEach(tab=>{const selected=tab.dataset.feature===key;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;if(selected&&focus)tab.focus();});
 const panel=document.getElementById('feature-panel');if(!panel)return;panel.setAttribute('aria-labelledby','tab-'+key);
 document.getElementById('feature-number').textContent=data.number;
 document.getElementById('feature-title').innerHTML=data.title;
 document.getElementById('feature-body').textContent=data.body;
 const points=document.getElementById('feature-points');points.replaceChildren(...data.points.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
 const image=document.getElementById('feature-image');image.src='assets/screens/'+data.image+'.png';image.alt=data.alt;
 document.getElementById('feature-zoom').dataset.zoom=image.getAttribute('src');
 document.getElementById('feature-caption').textContent=data.caption;
 document.getElementById('feature-guide').href='guide.html#'+data.guide;
}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectFeature(tab.dataset.feature));tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(index+1)%tabs.length;if(event.key==='ArrowLeft')target=(index+tabs.length-1)%tabs.length;if(event.key==='Home')target=0;if(event.key==='End')target=tabs.length-1;if(target!==undefined){event.preventDefault();selectFeature(tabs[target].dataset.feature,true);}});});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-header nav');
toggle?.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(expanded));nav?.classList.toggle('open',expanded);});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
const dialog=document.getElementById('image-dialog');let zoomTrigger=null;
document.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>{if(!dialog||typeof dialog.showModal!=='function'){window.open(button.dataset.zoom,'_blank','noopener');return;}zoomTrigger=button;dialog.querySelector('img').src=button.dataset.zoom;dialog.showModal();}));
dialog?.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});dialog?.addEventListener('close',()=>zoomTrigger?.focus());
const checks=[...document.querySelectorAll('[data-check]')],storageKey='rd-studio-pilot-v1';let saved={};
try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}');if(!saved||typeof saved!=='object')saved={};}catch{saved={};}
function refreshProgress(){const element=document.getElementById('check-progress');if(element)element.textContent=checks.filter(input=>input.checked).length+' / '+checks.length+'개 확인';}
checks.forEach(input=>{input.checked=Boolean(saved[input.dataset.check]);input.addEventListener('change',()=>{saved[input.dataset.check]=input.checked;try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch{}refreshProgress();});});refreshProgress();
document.getElementById('print-checklist')?.addEventListener('click',()=>window.print());
