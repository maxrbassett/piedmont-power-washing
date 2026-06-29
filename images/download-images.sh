#!/usr/bin/env bash
# Download Piedmont Power Washing site images.
# The build sandbox proxy blocked static.wixstatic.com, so images were not
# fetched automatically. Run this in an environment WITH internet access
# (e.g. `bash download-images.sh` from this images/ folder), then verify with `file *`.
set -e
cd "$(dirname "$0")"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
dl(){ echo "-> $2"; curl -fsSL -A "$UA" -o "$2" "$1" || echo "   FAILED: $1"; }

# Brand / hero
dl "https://static.wixstatic.com/media/bcefef_6aa3ae0d2b4e423b83ebf0b157883ed6~mv2.png" logo.png
dl "https://static.wixstatic.com/media/bcefef_8f53c34aff1f48af9e49934ba85a537e~mv2_d_3000_2000_s_2.jpg" hero-header.jpg
dl "https://static.wixstatic.com/media/bcefef_31213c8b9b9a42a9b91d59b085089fb9~mv2.png" angies-list-badge.png
dl "https://static.wixstatic.com/media/bcefef_7b85495079a6462882b603074d9bfa2b~mv2_d_5312_2988_s_4_2.jpg" about-large.jpg

# OUR WORK gallery (before/after job photos)
# ---------------------------------------------------------------------------
# REMOVED: the gallery URLs previously listed here were WRONG (they pointed at
# another business's Wix account, prefixes 6c8942_/32c7f4_ = Chosen Comfort HVAC).
# Piedmont's real assets all use the bcefef_ prefix (above).
#
# The "OUR WORK" gallery is a Wix Pro Gallery widget whose image URLs are loaded
# dynamically and are NOT in the page HTML, so they can't be scripted here.
# To collect the real before/after photos, open the live site, scroll to
# "OUR WORK", open each photo full-size and right-click → Save Image As… into
# this folder as work-01.jpg, work-02.jpg, …  (or have the owner send originals).
# ---------------------------------------------------------------------------

echo "Done. Verifying:"; file ./*.jpg ./*.png 2>/dev/null
