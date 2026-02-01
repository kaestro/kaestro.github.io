#!/usr/bin/env ruby
require 'yaml'

recommended_posts = []

Dir.glob('docs/_posts/**/*.md').each do |file|
  content = File.read(file, encoding: 'UTF-8')

  # YAML front matter 추출
  if content =~ /\A---\s*\n(.*?)\n---\s*\n/m
    front_matter = YAML.load($1)

    if front_matter['recommended'] == true
      # 첫 300단어 추출
      body = content.sub(/\A---\s*\n.*?\n---\s*\n/m, '')
      excerpt = body.split(/\s+/).take(300).join(' ')

      recommended_posts << {
        'title' => front_matter['title'],
        'category' => front_matter['categories'],
        'date' => front_matter['date'],
        'excerpt' => excerpt
      }
    end
  end
end

# 마크다운 형식으로 출력
recommended_posts.each_with_index do |post, i|
  puts "### #{i+1}. #{post['title']} (#{post['category']})"
  puts "**날짜:** #{post['date']}"
  puts "**요약:** #{post['excerpt'][0..200]}..."
  puts ""
end
