import NoteEditor from "@/components/note/note-editor";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-12 pt-6">
      <NoteEditor />
    </div>
  )
}
