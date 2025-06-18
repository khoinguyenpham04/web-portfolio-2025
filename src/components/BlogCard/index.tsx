import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  brandIcon?: string;
  category?: "project" | "hackathon";
  readingTime?: string;
  date?: string;
}

interface BlogCardProps {
  post: BlogPost;
  compact?: boolean;
}

export function BlogCard({ post, compact = false }: BlogCardProps) {
  const displayDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      })
    : null;

  return (
    <Link
      href={`/projects/${post.id}`}
      className={cn(
        "group block h-full transition-all duration-200",
        !compact && "hover:shadow-lg"
      )}
    >
      <div
        className={cn(
          "h-full bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300",
          compact ? "p-2 sm:p-3" : "p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-gray-300"
        )}
      >
        {/* Image */}
        <div className={cn(
          "relative mb-2 sm:mb-3 overflow-hidden bg-gray-100",
          compact ? "aspect-square rounded-md sm:rounded-lg" : "aspect-video rounded-lg sm:rounded-xl"
        )}>
          <Image
            src={post.images[0] || "/blue-gradient-placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={compact ? "(max-width: 768px) 50vw, 30vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span className={cn(
              "inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium rounded-full backdrop-blur-sm",
              "bg-white/90 text-gray-700 border border-white/20 shadow-sm"
            )}>
              {post.category || 'Project'}
            </span>
          </div>
          
          {/* Arrow icon */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 sm:p-1.5 shadow-sm">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2 sm:space-y-3">
          {/* Brand icon and title */}
          <div className="flex items-center gap-2 sm:gap-3">
            {post.brandIcon && (
              <div className="flex-shrink-0">
                <Image 
                  src={post.brandIcon} 
                  alt={`${post.title} logo`}
                  width={20} 
                  height={20} 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded"
                />
              </div>
            )}
            <h3 className={cn(
              "font-semibold text-gray-900 leading-tight line-clamp-2",
              compact ? "text-xs sm:text-sm" : "text-sm sm:text-lg",
              !compact && "group-hover:text-blue-600 transition-colors"
            )}>
              {post.title}
            </h3>
          </div>

          {/* Description */}
          {!compact && post.description && (
            <p className="text-gray-600 line-clamp-2 text-xs sm:text-sm leading-relaxed">
              {post.description}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {post.tags.slice(0, compact ? 2 : 3).map((tag) => (
                <span 
                  key={tag}
                  className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded border border-gray-200"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > (compact ? 2 : 3) && (
                <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium bg-gray-50 text-gray-500 rounded border border-gray-200">
                  +{post.tags.length - (compact ? 2 : 3)}
                </span>
              )}
            </div>
          )}

          {/* Meta information */}
          {(displayDate || post.readingTime) && (
            <div className={cn(
              "flex items-center text-gray-500 gap-2 sm:gap-3",
              compact ? "text-xs" : "text-xs sm:text-sm"
            )}>
              {displayDate && (
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span className="truncate">{compact ? displayDate.split(',')[0] : displayDate}</span>
                </div>
              )}
              {post.readingTime && (
                <>
                  {displayDate && <span className="hidden sm:inline">•</span>}
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{post.readingTime}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
