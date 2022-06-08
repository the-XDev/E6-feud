export interface PostsRoot {
    posts: Post[]
  }
  
  export interface Post {
    id: number
    created_at: string
    updated_at: string
    file: File
    preview: Preview
    sample: Sample
    score: Score
    tags: Tags
    locked_tags: any[]
    change_seq: number
    flags: Flags
    rating: string
    fav_count: number
    sources: string[]
    pools: any[]
    relationships: Relationships
    approver_id: number
    uploader_id: number
    description: string
    comment_count: number
    is_favorited: boolean
    has_notes: boolean
    duration: any
  }
  
  export interface File {
    width: number
    height: number
    ext: string
    size: number
    md5: string
    url: string
  }
  
  export interface Preview {
    width: number
    height: number
    url: string
  }
  
  export interface Sample {
    has: boolean
    height: number
    width: number
    url: string
    alternates: Alternates
  }
  
  export interface Alternates {}
  
  export interface Score {
    up: number
    down: number
    total: number
  }
  
  export interface Tags {
    general: string[]
    species: string[]
    character: string[]
    copyright: string[]
    artist: string[]
    invalid: any[]
    lore: any[]
    meta: string[]
  }
  
  export interface Flags {
    pending: boolean
    flagged: boolean
    note_locked: boolean
    status_locked: boolean
    rating_locked: boolean
    comment_disabled: boolean
    deleted: boolean
  }
  
  export interface Relationships {
    parent_id: any
    has_children: boolean
    has_active_children: boolean
    children: number[]
  }
  