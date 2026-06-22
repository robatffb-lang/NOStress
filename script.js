// --- 10-LANGUAGE INTERNAL DICTIONARY MATRIX ---
const dictionary = {
    en: {
        lblNewNote: "New Note", lblDraftTitle: "Draft Note", lblEditTitle: "Edit Note", lblSaveBtn: "Save to Board", lblUpdateBtn: "Update Note",
        lblConfirmTitle: "Delete Note?", lblConfirmDesc: "This action is permanent and cannot be undone. Are you sure?",
        btnKeep: "Keep Note", btnDelete: "Delete", placeholderTitle: "Give it a title...", placeholderNote: "Draft your thoughts here...",
        emptyState: "Your workspace is empty.", noteUnit: "Note", notesUnit: "Notes"
    },
    es: {
        lblNewNote: "Nueva Nota", lblDraftTitle: "Borrador", lblEditTitle: "Editar Nota", lblSaveBtn: "Guardar", lblUpdateBtn: "Actualizar Nota",
        lblConfirmTitle: "¿Eliminar Nota?", lblConfirmDesc: "Esta acción es permanente y no se puede deshacer. ¿Estás seguro?",
        btnKeep: "Conservar", btnDelete: "Eliminar", placeholderTitle: "Dale un título...", placeholderNote: "Escribe tus pensamientos aquí...",
        emptyState: "Tu espacio de trabajo está vacío.", noteUnit: "Nota", notesUnit: "Notas"
    },
    fr: {
        lblNewNote: "Nouvelle Note", lblDraftTitle: "Brouillon", lblEditTitle: "Modifier la Note", lblSaveBtn: "Enregistrer", lblUpdateBtn: "Mettre à jour",
        lblConfirmTitle: "Supprimer la note?", lblConfirmDesc: "Cette action è permanente et ne peut pas être annulée. Êtes-vous sûr?",
        btnKeep: "Garder", btnDelete: "Supprimer", placeholderTitle: "Donnez un titre...", placeholderNote: "Rédigez vos pensées ici...",
        emptyState: "Votre espace de travail est vide.", noteUnit: "Note", notesUnit: "Notes"
    },
    de: {
        lblNewNote: "Neue Notiz", lblDraftTitle: "Entwurf", lblEditTitle: "Notiz Bearbeiten", lblSaveBtn: "Speichern", lblUpdateBtn: "Aktualisieren",
        lblConfirmTitle: "Notiz löschen?", lblConfirmDesc: "Diese Aktion ist dauerhaft und kann nicht rückgängig gemacht werden. Sind Sie sicher?",
        btnKeep: "Behalten", btnDelete: "Löschen", placeholderTitle: "Titel eingeben...", placeholderNote: "Verfassen Sie hier Ihre Gedanken...",
        emptyState: "Ihr Arbeitsbereich ist leer.", noteUnit: "Notiz", notesUnit: "Notizen"
    },
    it: {
        lblNewNote: "Nuova Nota", lblDraftTitle: "Bozza", lblEditTitle: "Modifica Nota", lblSaveBtn: "Salva", lblUpdateBtn: "Aggiorna Nota",
        lblConfirmTitle: "Eliminare la nota?", lblConfirmDesc: "Questa azione è permanente e sará impossibile annullarla. Sei sicuro?",
        btnKeep: "Mantieni", btnDelete: "Elimina", placeholderTitle: "Dai un titolo...", placeholderNote: "Scrivi i tuoi pensieri qui...",
        emptyState: "Il tuo spazio di lavoro è vuoto.", noteUnit: "Nota", notesUnit: "Note"
    },
    pt: {
        lblNewNote: "Nova Nota", lblDraftTitle: "Rascunho", lblEditTitle: "Editar Nota", lblSaveBtn: "Salvar", lblUpdateBtn: "Atualizar Nota",
        lblConfirmTitle: "Excluir Nota?", lblConfirmDesc: "Esta ação é permanente e não pode ser desfeita. Você tem certeza?",
        btnKeep: "Manter Nota", btnDelete: "Excluir", placeholderTitle: "Dê um título...", placeholderNote: "Rascunhe seus pensamentos aqui...",
        emptyState: "Seu espaço de trabalho está vazio.", noteUnit: "Nota", notesUnit: "Notas"
    },
    ru: {
        lblNewNote: "Новая заметка", lblDraftTitle: "Черновик", lblEditTitle: "Редактировать", lblSaveBtn: "Сохранить", lblUpdateBtn: "Обновить запись",
        lblConfirmTitle: "Удалить заметку?", lblConfirmDesc: "Это действие необратимо. Вы уверены, что хотите удалить?",
        btnKeep: "Оставить", btnDelete: "Удалить", placeholderTitle: "Введите заголовок...", placeholderNote: "Напишите свои мысли здесь...",
        emptyState: "Ваше рабочее пространство пусто.", noteUnit: "Заметка", notesUnit: "Заметки"
    },
    zh: {
        lblNewNote: "新建笔记", lblDraftTitle: "草稿笔记", lblEditTitle: "编辑笔记", lblSaveBtn: "保存到看板", lblUpdateBtn: "更新笔记",
        lblConfirmTitle: "删除笔记？", lblConfirmDesc: "此操作将永久删除且无法撤销。您确定吗？",
        btnKeep: "保留笔记", btnDelete: "删除", placeholderTitle: "添加标题...", placeholderNote: "在此撰写您的想法...",
        emptyState: "您的工作空间是空的。", noteUnit: "条笔记", notesUnit: "条笔记"
    },
    ja: {
        lblNewNote: "ノートを作成", lblDraftTitle: "下書き", lblEditTitle: "ノートを編集", lblSaveBtn: "ボードに保存", lblUpdateBtn: "ノートを更新",
        lblConfirmTitle: "ノートを削除しますか？", lblConfirmDesc: "この操作は取り消せません。本当に削除してもよろしいですか？",
        btnKeep: "保持する", btnDelete: "削除する", placeholderTitle: "タイトルを入力...", placeholderNote: "ここに考えをドラフトする...",
        emptyState: "ワークスペースには何もありません。", noteUnit: "個のノート", notesUnit: "個의 노트"
    },
    ko: {
        lblNewNote: "새 노트", lblDraftTitle: "노트 초안", lblEditTitle: "노트 수정", lblSaveBtn: "보드에 저장", lblUpdateBtn: "노트 업데이트",
        lblConfirmTitle: "노트를 삭제하시겠습니까?", lblConfirmDesc: "이 작업은 영구적이며 취소할 수 없습니다. 정말이십니까?",
        btnKeep: "보존하기", btnDelete: "삭제하기", placeholderTitle: "제목을 입력하세요...", placeholderNote: "여기에 생각을 작성하세요...",
        emptyState: "작업 공간이 비어 있습니다.", noteUnit: "개 노트", notesUnit: "개 노트"
    }
};

let currentLang = localStorage.getItem('nostressLang') || 'en';
let notes = JSON.parse(localStorage.getItem('nostressNotes')) || [];

// Operational Pointer Targets
let targetNoteIdToDelete = null; 
let targetButtonElToDelete = null;
let editingNoteId = null; 

// Element Mapping Nodes
const langSelect = document.getElementById('langSelect');
const openComposeBtn = document.getElementById('openComposeBtn');
const closeComposeBtn = document.getElementById('closeComposeBtn');
const composeScreen = document.getElementById('composeScreen');
const saveBtn = document.getElementById('saveBtn');
const notesGrid = document.getElementById('notesGrid');
const titleInput = document.getElementById('titleInput');
const noteInput = document.getElementById('noteInput');
const noteCount = document.getElementById('noteCount');
const smoothCaret = document.getElementById('smoothCaret');
const formGroup = document.getElementById('formGroup');
const lblDraftTitle = document.getElementById('lblDraftTitle');
const dashboardContainer = document.querySelector('.dashboard-container');
const composeBox = document.querySelector('.compose-box');

const confirmModal = document.getElementById('confirmModal');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

window.addEventListener('DOMContentLoaded', () => {
    langSelect.value = currentLang;
    applyTranslations();
    renderNotes();
    setTimeout(() => document.getElementById('loadingScreen').classList.add('fade-out'), 1400);
});

// --- NEW: STAGGERED LANG-SWITCHING ANIMATION ENGINE ---
langSelect.onchange = (e) => {
    currentLang = e.target.value;
    localStorage.setItem('nostressLang', currentLang);

    // Find which view container is actively displayed on the user's viewport
    const targetElementToAnimate = composeScreen.classList.contains('active') ? composeBox : dashboardContainer;

    // Phase 1: Spin down, blur, and shrink the panel
    targetElementToAnimate.classList.add('lang-changing-out');

    setTimeout(() => {
        // Phase 2: Swap the language text properties mid-way through the animation
        applyTranslations();
        renderNotes();

        // Phase 3: Pop the window elements cleanly back into view
        targetElementToAnimate.classList.remove('lang-changing-out');
        
        // Re-align the fluid carets if editing text
        if (composeScreen.classList.contains('active')) {
            const currentActiveField = document.activeElement === noteInput ? noteInput : titleInput;
            updateCaretPosition(currentActiveField);
        }
    }, 220); // Syncs with CSS transition speed curves
};

function applyTranslations() {
    const data = dictionary[currentLang];
    document.getElementById('lblNewNote').textContent = data.lblNewNote;
    cancelDeleteBtn.textContent = data.btnKeep;
    confirmDeleteBtn.textContent = data.btnDelete;
    document.getElementById('lblConfirmTitle').textContent = data.lblConfirmTitle;
    document.getElementById('lblConfirmDesc').textContent = data.lblConfirmDesc;
    
    titleInput.setAttribute('placeholder', data.placeholderTitle);
    noteInput.setAttribute('placeholder', data.placeholderNote);

    if (editingNoteId) {
        lblDraftTitle.textContent = data.lblEditTitle;
        document.getElementById('lblSaveBtn').textContent = data.lblUpdateBtn;
    } else {
        lblDraftTitle.textContent = data.lblDraftTitle;
        document.getElementById('lblSaveBtn').textContent = data.lblSaveBtn;
    }
}

// --- OVERLAY SPACE NAVIGATION ---
openComposeBtn.onclick = () => {
    editingNoteId = null; 
    lblDraftTitle.setAttribute('data-edit-mode', 'false');
    applyTranslations();
    
    composeScreen.classList.add('active');
    setTimeout(() => titleInput.focus(), 150);
};

closeComposeBtn.onclick = () => {
    composeScreen.classList.remove('active');
    titleInput.innerHTML = '';
    noteInput.innerHTML = '';
    smoothCaret.style.opacity = '0';
    editingNoteId = null;
};

// --- CLICK TO EDIT REVAMPED ROUTING ---
function openEditWorkspace(id) {
    const targetNote = notes.find(n => n.id === id);
    if (!targetNote) return;

    editingNoteId = id;
    lblDraftTitle.setAttribute('data-edit-mode', 'true');
    applyTranslations();

    titleInput.innerText = targetNote.title;
    noteInput.innerText = targetNote.content;

    composeScreen.classList.add('active');
    
    setTimeout(() => {
        noteInput.focus();
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(noteInput);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        updateCaretPosition(noteInput);
    }, 200);
}

// --- BULLETPROOF MULTI-LINE CARET ENGINE ---
function updateCaretPosition(activeElement) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0).cloneRange();
    const groupRect = formGroup.getBoundingClientRect();
    let targetRect = null;

    const rects = range.getClientRects();
    if (rects.length > 0) {
        targetRect = rects[rects.length - 1];
    } 
    
    if (!targetRect || targetRect.top === 0 || targetRect.height === 0) {
        const node = selection.focusNode;
        if (node) {
            if (node.nodeType === 1 && node.getBoundingClientRect) {
                targetRect = node.getBoundingClientRect();
            } else if (node.parentNode && node.parentNode.getBoundingClientRect) {
                targetRect = node.parentNode.getBoundingClientRect();
            }
        }
    }

    if (!targetRect || targetRect.top === 0 || targetRect.height === 0) {
        const inputRect = activeElement.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(activeElement);
        targetRect = {
            left: inputRect.left + parseFloat(computedStyle.paddingLeft),
            top: inputRect.top + parseFloat(computedStyle.paddingTop),
            height: parseFloat(computedStyle.fontSize) * 1.4
        };
    }

    const targetLeft = targetRect.left - groupRect.left;
    const targetTop = targetRect.top - groupRect.top;

    if (targetRect.height > 0) {
        smoothCaret.style.left = `${targetLeft}px`;
        smoothCaret.style.top = `${targetTop}px`;
        smoothCaret.style.height = `${targetRect.height}px`;
    }
}

[titleInput, noteInput].forEach(el => {
    ['keyup', 'input', 'click', 'focus'].forEach(evt => {
        el.addEventListener(evt, () => {
            smoothCaret.style.opacity = '1';
            requestAnimationFrame(() => updateCaretPosition(el));
        });
    });
    el.addEventListener('blur', () => smoothCaret.style.opacity = '0');
});

titleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); noteInput.focus(); }
});

// --- SAVE / UPDATE DATA DISPATCH PIPELINE ---
saveBtn.onclick = () => {
    const title = titleInput.innerText.trim();
    const content = noteInput.innerText.trim();
    if (!title || !content) return;

    if (editingNoteId) {
        notes = notes.map(note => note.id === editingNoteId ? {
            ...note, title: title, content: content
        } : note);
    } else {
        const newNote = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toLocaleDateString(currentLang, { month: 'short', day: 'numeric' })
        };
        notes.push(newNote);
    }

    localStorage.setItem('nostressNotes', JSON.stringify(notes));
    renderNotes();
    
    composeScreen.classList.remove('active');
    titleInput.innerHTML = '';
    noteInput.innerHTML = '';
    smoothCaret.style.opacity = '0';
    editingNoteId = null;
};

// --- INTENT-CHECK INTERCEPT DELETION PIPELINE ---
function triggerDeleteRequest(id, event, buttonEl) {
    event.stopPropagation(); 
    targetNoteIdToDelete = id;
    targetButtonElToDelete = buttonEl;
    confirmModal.classList.add('active');
}

cancelDeleteBtn.onclick = () => {
    confirmModal.classList.remove('active');
    targetNoteIdToDelete = null; targetButtonElToDelete = null;
};

confirmDeleteBtn.onclick = () => {
    if (!targetNoteIdToDelete || !targetButtonElToDelete) return;
    confirmModal.classList.remove('active');

    const card = targetButtonElToDelete.closest('.note-card');
    card.classList.add('removing');
    
    setTimeout(() => {
        notes = notes.filter(note => note.id !== targetNoteIdToDelete);
        localStorage.setItem('nostressNotes', JSON.stringify(notes));
        renderNotes();
        targetNoteIdToDelete = null; targetButtonElToDelete = null;
    }, 250);
};

// --- COMPONENT MATRIX ASSEMBLY RENDERING ---
function renderNotes() {
    const data = dictionary[currentLang];
    const unitLabel = notes.length === 1 ? data.noteUnit : data.notesUnit;
    noteCount.textContent = ['zh', 'ja', 'ko'].includes(currentLang) ? `${notes.length}${unitLabel}` : `${notes.length} ${unitLabel}`;

    if (notes.length === 0) {
        notesGrid.innerHTML = `<p style="color: var(--text-secondary); grid-column: 1/-1; text-align: center; padding-top: 60px;">${data.emptyState}</p>`;
        return;
    }

    notesGrid.innerHTML = notes.map((note, idx) => `
        <div class="note-card" style="animation-delay: ${idx * 0.02}s" onclick="openEditWorkspace(${note.id})">
            <div>
                <h4>${escapeHTML(note.title)}</h4>
                <p>${escapeHTML(note.content)}</p>
            </div>
            <div class="card-footer">
                <span>${note.date}</span>
                <button class="delete-btn" onclick="triggerDeleteRequest(${note.id}, event, this)">${data.btnDelete}</button>
            </div>
        </div>
    `).join('');
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}