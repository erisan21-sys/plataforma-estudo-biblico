import React, { useState } from 'react';
import type { UserNote, UserBookmark } from '../types/bible';
import { StorageService } from '../services/storageService';
import { X, Bookmark, Trash2, Plus, Tag, Edit3 } from 'lucide-react';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeReference?: string;
  onNavigateToVerse: (bookId: string, chapter: number, verse: number) => void;
}

export const NotesModal: React.FC<NotesModalProps> = ({
  isOpen,
  onClose,
  activeReference,
  onNavigateToVerse
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'bookmarks' | 'new_note'>('notes');
  const [notes, setNotes] = useState<UserNote[]>(StorageService.getNotes());
  const bookmarks: UserBookmark[] = StorageService.getBookmarks();
  
  // Note creation/editing state
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [noteRef, setNoteRef] = useState(activeReference || 'João 1:1');
  const [noteTags, setNoteTags] = useState('Cristologia, Exegese');

  if (!isOpen) return null;

  const handleSaveNote = () => {
    if (!noteTitle.trim() || !noteContent.trim()) return;

    // Parse reference
    const parts = noteRef.split(' ');
    const bookName = parts[0] || 'João';
    const numParts = (parts[1] || '1:1').split(':');
    const ch = parseInt(numParts[0] || '1', 10);
    const v = parseInt(numParts[1] || '1', 10);

    const updatedNote: UserNote = {
      id: editingNoteId || `note_${Date.now()}`,
      reference: noteRef,
      bookId: bookName.toUpperCase().slice(0, 3),
      chapter: ch,
      verse: v,
      title: noteTitle,
      content: noteContent,
      tags: noteTags.split(',').map(t => t.trim()).filter(Boolean),
      updatedAt: new Date().toLocaleDateString('pt-BR')
    };

    StorageService.addOrUpdateNote(updatedNote);
    setNotes(StorageService.getNotes());
    setEditingNoteId(null);
    setNoteTitle('');
    setNoteContent('');
    setActiveSubTab('notes');
  };

  const handleDeleteNote = (id: string) => {
    StorageService.deleteNote(id);
    setNotes(StorageService.getNotes());
  };

  const handleStartEdit = (n: UserNote) => {
    setEditingNoteId(n.id);
    setNoteTitle(n.title);
    setNoteContent(n.content);
    setNoteRef(n.reference);
    setNoteTags(n.tags.join(', '));
    setActiveSubTab('new_note');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Minhas Anotações & Caderno Teológico</h3>
              <p className="text-xs text-slate-400">Notas pessoais e marcadores vinculados aos versículos</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-tabs */}
        <div className="px-5 py-2.5 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSubTab('notes')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'notes' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Anotações ({notes.length})
            </button>
            <button
              onClick={() => setActiveSubTab('bookmarks')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeSubTab === 'bookmarks' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Marcadores ({bookmarks.length})
            </button>
          </div>

          <button
            onClick={() => {
              setEditingNoteId(null);
              setNoteTitle('');
              setNoteContent('');
              setNoteRef(activeReference || 'João 1:1');
              setActiveSubTab('new_note');
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold shadow hover:scale-105 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nova Anotação</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          
          {/* Form to create/edit note */}
          {activeSubTab === 'new_note' && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-in fade-in duration-200">
              <h4 className="font-bold text-sm text-amber-400">
                {editingNoteId ? 'Editar Anotação' : 'Criar Nova Anotação'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Referência Bíblica:</label>
                  <input
                    type="text"
                    value={noteRef}
                    onChange={(e) => setNoteRef(e.target.value)}
                    placeholder="ex: João 1:1"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">Tags (separadas por vírgula):</label>
                  <input
                    type="text"
                    value={noteTags}
                    onChange={(e) => setNoteTags(e.target.value)}
                    placeholder="ex: Cristologia, Trindade"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Título da Nota:</label>
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="ex: A Divindade do Logos no Grego"
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Conteúdo da Anotação:</label>
                <textarea
                  rows={4}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Escreva seus apontamentos teológicos, reflexões ou citações..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setActiveSubTab('notes')}
                  className="px-4 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow"
                >
                  Salvar Anotação
                </button>
              </div>
            </div>
          )}

          {/* Notes List */}
          {activeSubTab === 'notes' && (
            <div className="space-y-3">
              {notes.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  Você ainda não possui anotações salvas. Toque em "Nova Anotação" para começar!
                </div>
              ) : (
                notes.map(n => (
                  <div key={n.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-bold">
                          {n.reference}
                        </span>
                        <h4 className="font-bold text-white text-sm">{n.title}</h4>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleStartEdit(n)}
                          className="p-1 text-slate-400 hover:text-amber-400"
                          title="Editar"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(n.id)}
                          className="p-1 text-slate-400 hover:text-rose-400"
                          title="Excluir"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {n.content}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3 h-3 text-slate-400" />
                        {n.tags.map((t, ti) => (
                          <span key={ti} className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          onNavigateToVerse(n.bookId, n.chapter, n.verse);
                          onClose();
                        }}
                        className="text-indigo-400 hover:text-indigo-300 font-semibold"
                      >
                        Abrir no Texto &rarr;
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Bookmarks List */}
          {activeSubTab === 'bookmarks' && (
            <div className="space-y-2">
              {bookmarks.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-sm">
                  Nenhum versículo marcado ainda.
                </div>
              ) : (
                bookmarks.map(bm => (
                  <div
                    key={bm.id}
                    onClick={() => {
                      onNavigateToVerse(bm.bookId, bm.chapter, bm.verse);
                      onClose();
                    }}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:bg-slate-800/60 cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Bookmark className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <div>
                        <span className="font-bold text-white text-sm">{bm.reference}</span>
                        {bm.label && <p className="text-xs text-slate-400">{bm.label}</p>}
                      </div>
                    </div>

                    <span className="text-xs text-indigo-400 font-semibold">Ir para o versículo &rarr;</span>
                  </div>
                ))
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
